#[Get Insight] [Apps for democracy 2016 challenge](http://appsfordemocracy.tn/) 

###Idea generation:

* so if you are doing a market research it would be great to find infos related to the subject easily

* if you are going to diliver a presentation we find difficulties finding the right statistics or infos Jumping (hoping) from one site to another.
and even if we found them we find dificulties transforming the raw data into valuable charts readable by the human eye

* If you want some infos or you want to ask some questions or do a survey it would be quite hard to find the adequate people to target (with a specified age-sexe-location,have house, educated,..) and even if you find the right ppl how would you encourge them to answer the question ?

* //Politics people (in the const)

* use the AINSI data to see how many ppl does the  

* User (premium) won't know your credential your answer will be anonym

* possibility to add infos specified to user country (got it from signup):
-- growth charts -
-- new projects, On hold and stucked (by the municipality..) 
-- the money provided for the city
...

* So the MVP solution for getting votes,targeted Surveys answers is a platform where the user (premium) who needs adequate answers pay a small fee and the question will be directed to the ppl who match the user specification, the user will get real time results.
As for the cliznts they must insert their ID to get checked and start getting 'rewarded' for getting answers
for instance if you raise 1000 pt (10pt for answer) you will enter lottery to win smartphone recharging cards ...you will only get rewarded for the questions we send to you 
User can also answer Questions from the the feeds page and get 1 point for an answer 
if you write a comment answering a survey and the answer 



###Node-Login is built on top of the following libraries :

* [Node.js](http://nodejs.org/) - Application Server
* [Express.js](http://expressjs.com/) - Node.js Web Framework
* [MongoDb](http://mongodb.org/) - Database Storage
* [Jade](http://jade-lang.com/) - HTML Templating Engine
* [Stylus](http://stylus-lang.com/) - CSS Preprocessor
* [EmailJS](http://github.com/eleith/emailjs) - Node.js > SMTP Server Middleware
* [Moment.js](http://momentjs.com/) - Lightweight Date Library
* [Twitter Bootstrap](http://twitter.github.com/bootstrap/) - UI Component & Layout Library
* [react](http://twitter.github.com/bootstrap/) - the view in MVC
* [material UI](material-ui.com) - UI Components 
* [recharts](recharts.org) - D3.js for react

##Installation & Setup
1. Install [Node.js](https://nodejs.org/) & [MongoDB](https://www.mongodb.org/) if you haven't already.
2. Clone this repository and install its dependencies.
		
		> download the project
		> cd node-login
		> npm install
		
3. In a separate shell start the MongoDB daemon.

		> mongod

4. From within the node-login directory, start the server.

		> node app
		
5. Open a browser window and navigate to: [http://localhost:3000](http://localhost:3000)

##Password Retrieval

To enable the password retrieval feature it is recommended that you create environment variables for your credentials instead of hard coding them into the [email dispatcher module](https://github.com/braitsch/node-login/blob/master/app/server/modules/email-dispatcher.js).

To do this on OSX you can simply add them to your .profile or .bashrc file.

	export EMAIL_HOST='smtp.gmail.com'
	export EMAIL_USER='your.email@gmail.com'
	export EMAIL_PASS='1234'


##Contributing

Questions and suggestions for improvement are welcome.
