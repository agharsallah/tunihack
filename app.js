
var http = require('http');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var cookieParser = require('cookie-parser');
var MongoStore = require('connect-mongo')(session);
var socketio = require('socket.io');
var io;
const DB = require('./app/server/modules/db-manager');
var RedisStore = require("connect-redis")(session);
var request = require('request');

var app = express();



app.locals.pretty = true;
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/app/server/views');
app.set('view engine', 'jade');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('stylus').middleware({ src: __dirname + '/app/public' }));
app.use(express.static(__dirname + '/app/public'));

/*Webpack midelware*/
var webpack = require ('webpack')  
var webpackDevMiddleware = require ('webpack-dev-middleware')  
var webpackHotMiddleware = require ('webpack-hot-middleware')  
var config = require ('./webpack.config.js')  
var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {  
    publicPath: config.output.publicPath,
    stats: {colors: true},
    hot: true,
   	watchOptions: {
    	poll: true
  	}
}))
app.use(webpackHotMiddleware(compiler, {  
    log: console.log 
})) 

// build mongo database connection url //

var dbHost = process.env.DB_HOST || 'localhost'
var dbPort = process.env.DB_PORT || 27017;
var dbName = process.env.DB_NAME || 'node-login';

var dbURL = 'mongodb://'+dbHost+':'+dbPort+'/'+dbName;
if (app.get('env') == 'live'){
// prepend url with authentication credentials // 
	dbURL = 'mongodb://'+process.env.DB_USER+':'+process.env.DB_PASS+'@'+dbHost+':'+dbPort+'/'+dbName;
}

/*app.use(session({
	secret: 'faeb4453e5d14fe6f6d04637f78077c76c73d1b4',
	proxy: true,
	resave: true,
	saveUninitialized: true,
	store: new MongoStore({ url: dbURL })
	})
);*/
var sessionMiddleware = session({
    proxy: true,
  resave: true,
  saveUninitialized: true,
    store: new RedisStore({host:'localhost',port:6379}), // XXX redis server config
    secret: "keyboard cat",
});
var server = http.createServer(app).listen(app.get('port'),'localhost' );
var io = require("socket.io").listen(server);

/*socket session*/
//passing the session to the socket 
io.use(function(socket, next) {
    sessionMiddleware(socket.request, socket.request.res, next);
});
app.use(sessionMiddleware);
/*socket session*/

require('./app/server/routes')(app);
 /*--------------------------------------------------------socket part----------------------*/
  	 var connections = [];

  	io.sockets.on('connection', function(socket){

         socket.once('disconnect', function(){
    connections.splice(connections.indexOf(socket),1);
      socket.disconnect();
      console.log('disconnected: %s users remaining',connections.length);
    });


      socket.on('AddedMeal',function(AddedMeal){
        console.log(socket.request.session.user._id)
        console.log(AddedMeal)
        DB.addnewmeal(AddedMeal,socket.request.session.user._id,socket.request.session.user.name,socket.request.session.user.adress,socket.request.session.user.phone_number,function(e){
          if (e) {console.log(e)}
        })
      })

      socket.on('AddOrder',function(order){
       DB.addneworder(order,socket.request.session.user._id,socket.request.session.user.name,socket.request.session.user.adress,socket.request.session.user.phone_number,function(e){
          if (e) {console.log(e)}
        })       
       DB.getHostPhone(order.mealid,function(e,res){
          if (e) {console.log(e)}else{
              console.log(res.phone_number)
              var message = 'vous avez une ordere pour'+ order.value+' personne concernant '+res.name 
              var url  = 'http://sms.tritux.com/v1/send'
              var propertiesObject = {'username': 'tunihack3',
                              'password': 'xut1251',
                              'origin': 'tunihack',
                              destination:res.phone_number,
                              text:message };

              request({url:url, qs:propertiesObject}, function(err, response, body) {
                if(err) { console.log(err); return; }
                console.log("Get response: " + response.statusCode);
              });
          }
        })

      })

	});
