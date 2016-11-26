
var CT = require('./modules/country-list');
var AM = require('./modules/db-manager');
var EM = require('./modules/email-dispatcher');

module.exports = function(app) {

// main login page //
	app.get('/', function(req, res){
	// check if the user's credentials are saved in a cookie //
		if (req.cookies.user == undefined || req.cookies.pass == undefined){
			res.render('login', { title: 'Hello - Please Login To Your Account' });
		}	else{
	// attempt automatic login //
			AM.autoLogin(req.cookies.user, req.cookies.pass, function(o){
				console.log(o)
				if ((o !== null)&&(o.user.status==="simple")){
				    req.session.user = o;
					res.redirect('/home');
				}	else if ((o !== null)&&(o.status==="admin")){
				    req.session.user = o;
					res.redirect('/homeAdmin');
				}else {
					res.render('login', { title: 'Hello - Please Login To Your Account' });
				}
			});
		}
	});
	
	app.post('/', function(req, res){
		AM.manualLogin(req.body['user'], req.body['pass'], function(e, o){
			if (!o){
				res.status(400).send(e);
			}	else{
				req.session.user = o;
				if (req.body['remember-me'] == 'true'){
					res.cookie('user', o.user, { maxAge: 900000 });
					res.cookie('pass', o.pass, { maxAge: 900000 });
				}
				res.status(200).send(o);
			}
		});
	});
//	
	app.get('/home', function(req, res) {
		if (req.session.user == null){
	// if user is not logged-in redirect back to login page //
			res.redirect('/');
		}	else if ((req.session.user !== null)&&(req.session.user.status === 'simple')) {
			console.log('here')
			res.render('home', {
				title : 'Get-Insight',
				countries : CT,
				udata : req.session.user,
				activeHome:'active',activeSurvey:''
			});
		} else {
			console.log('here2')
			res.render('homeAdmin', {
				title : 'Get-Insight',
				countries : CT,
				udata : req.session.user,
				activeHome:'active',activeSurvey:''
			});
		}
	});
	
/*survey creation for User*/
	app.get('/checkSurvey',(req, res) => {
		if (req.session.user == null){
	// if user is not logged-in redirect back to login page //
			res.redirect('/');
		}	else if ((req.session.user !== null)&&(req.session.user.status === "simple")) {
				res.render('home',{
				title : 'Get-Insight',
				countries : CT,
				udata : req.session.user,
				activeHome:'',activeSurvey:'active'
			});
		}else {
			res.render('404', { title: 'Page Not Found'});
		}

	})

/*survey creation for admin*/
	app.get('/createSurvey',(req, res) => {
		if (req.session.user == null){
	// if user is not logged-in redirect back to login page //
			res.redirect('/');
		}	else if ((req.session.user !== null)&&(req.session.user.status === "admin")) {
				res.render('surveyAdmin',{
				title : 'Get-Insight',
				countries : CT,
				udata : req.session.user,
				activeHome:'',activeSurvey:'active'
			});
		}else {
			res.render('404', { title: 'Page Not Found'});
		}

	})

		app.post('/createSurvey', function(req, res){
		if (req.session.user == null){
			res.redirect('/');
		}	else if ((req.session.user !== null)&&(req.session.user.status === "admin")) {
			AM.addNewSurvey({
				userId			:req.session.user._id,
				userName		:req.session.user.name,
				surveyName 		: req.body['surveyName'],
				question 		: req.body['question'],
				checkOrRadio 	: req.body['checkOrRadio'],
				options			: req.body['options']
			}, function(e){
				if (e){
					res.status(400).send(e);
				}	else{
					res.status(200).send('ok');
				}
			});

		}else {
			res.render('404', { title: 'Page Not Found'});
		}
	});
// logged-in user profile //
	
	app.get('/profile', function(req, res) {
		if (req.session.user == null){
	// if user is not logged-in redirect back to login page //
			res.redirect('/');
		}	else{
			res.render('profile', {
				title : 'Get-Insight',
				countries : CT,
				udata : req.session.user,
			});
		}
	});
	
	app.post('/profile', function(req, res){
		if (req.session.user == null){
			res.redirect('/');
		}	else{
			AM.updateAccount({
				id		: req.session.user._id,
				name	: req.body['name'],
				email	: req.body['email'],
				pass	: req.body['pass'],
				country	: req.body['country']
			}, function(e, o){
				if (e){
					res.status(400).send('error-updating-account');
				}	else{
					req.session.user = o;
			// update the user's login cookies if they exists //
					if (req.cookies.user != undefined && req.cookies.pass != undefined){
						res.cookie('user', o.user, { maxAge: 900000 });
						res.cookie('pass', o.pass, { maxAge: 900000 });	
					}
					res.status(200).send('ok');
				}
			});
		}
	});

	app.get('/logout', function(req, res){
		res.clearCookie('user');
		res.clearCookie('pass');
		req.session.destroy();
		res.redirect('/');
	})
	
// creating new accounts //
	
	app.get('/signup', function(req, res) {
		res.render('signup', {  title: 'Signup', countries : CT });
	});
	
	app.post('/signup', function(req, res){
		AM.addNewAccount({
			name 			: req.body['name'],
			email 			: req.body['email'],
			phone_number 	: req.body['phone_number'],
			age 			: req.body['age'],
			job 			: req.body['job'],
			adress 			: req.body['adress'],
			user 			: req.body['user'],
			pass			: req.body['pass'],
			country 		: req.body['country'],
			status 			: 'simple'
		}, function(e){
			if (e){
				res.status(400).send(e);
			}	else{
				res.status(200).send('ok');
			}
		});
	});

/*signup Admin*/

	app.get('/signupAdmin', function(req, res) {
		res.render('signupAdmin', {  title: 'Signup', countries : CT });
	});
	
	app.post('/signupAdmin', function(req, res){
		AM.addNewAccount({
			name 			: req.body['name'],
			email 			: req.body['email'],
			phone_number 	: req.body['phone_number'],
			job 			: req.body['job'],
			age 			: req.body['age'],
			adress 			: req.body['adress'],
			user 			: req.body['user'],
			pass			: req.body['pass'],
			country 		: req.body['country'],
			status 			: 'admin'
		}, function(e){
			if (e){
				res.status(400).send(e);
			}	else{
				res.status(200).send('ok');
			}
		});
	});

// password reset //

	app.post('/lost-password', function(req, res){
	// look up the user's account via their email //
		AM.getAccountByEmail(req.body['email'], function(o){
			if (o){
				EM.dispatchResetPasswordLink(o, function(e, m){
				// this callback takes a moment to return //
				// TODO add an ajax loader to give user feedback //
					if (!e){
						res.status(200).send('ok');
					}	else{
						for (k in e) console.log('ERROR : ', k, e[k]);
						res.status(400).send('unable to dispatch password reset');
					}
				});
			}	else{
				res.status(400).send('email-not-found');
			}
		});
	});

	app.get('/reset-password', function(req, res) {
		var email = req.query["e"];
		var passH = req.query["p"];
		AM.validateResetLink(email, passH, function(e){
			if (e != 'ok'){
				res.redirect('/');
			} else{
	// save the user's email in a session instead of sending to the client //
				req.session.reset = { email:email, passHash:passH };
				res.render('reset', { title : 'Reset Password' });
			}
		})
	});
	
	app.post('/reset-password', function(req, res) {
		var nPass = req.body['pass'];
	// retrieve the user's email from the session to lookup their account and reset password //
		var email = req.session.reset.email;
	// destory the session immediately after retrieving the stored email //
		req.session.destroy();
		AM.updatePassword(email, nPass, function(e, o){
			if (o){
				res.status(200).send('ok');
			}	else{
				res.status(400).send('unable to update password');
			}
		})
	});
	
// view & delete accounts //
	
	app.get('/print', function(req, res) {
		AM.getAllRecords( function(e, accounts){
			res.render('print', { title : 'Account List', accts : accounts });
		})
	});
	
	app.post('/delete', function(req, res){
		AM.deleteAccount(req.body.id, function(e, obj){
			if (!e){
				res.clearCookie('user');
				res.clearCookie('pass');
				req.session.destroy(function(e){ res.status(200).send('ok'); });
			}	else{
				res.status(400).send('record not found');
			}
	    });
	});
	
	app.get('/reset', function(req, res) {
		AM.delAllRecords(function(){
			res.redirect('/print');	
		});
	});
	
	app.get('*', function(req, res) { res.render('404', { title: 'Page Not Found'}); });

};
