var User = require('../models/user').model,
	winston = require('winston'),
	passport = require('passport');

module.exports = function(app){

	// global middleware
	app.all('*', function (req, res, next){
		res.locals({
			user : req.user
		});
		res.removeHeader('X-Powered-By');
		next();
	});


	app.get('/socket_graph_test', function (req, res){
	  //print_visits(req, res);
	  res.render('dashboard', {
	    title: 'Express',
	    locals : { temp: 1 }
	  });

	});

	app.get('/', function (req, res){
	  res.render('index', {
	    title: "Bitponics"
	  });
	});

	app.get('/login', function (req, res){
		var redirect = req.query.redirect,
			locals = {
				title: 'Login',
				formAction : '/login'
			};

		if (redirect){
			locals.formAction += '?redirect=' + redirect;
		}

		res.render('login', locals);
	});

	app.post('/login', function (req, res, next){
		passport.authenticate('local', function(err, user, info) {
		    if (err) { return next(err); }
		    if (!user) {
		    	console.log(info)
		      req.flash('error', info.message);
		      return res.redirect('/login')
		    }
		    req.logIn(user, function(err) {
		      if (err) { return next(err); }
		      return res.redirect(req.query.redirect || '/dashboard');
		    });
	    })(req, res, next);
	});

	app.get('/signup', function (req, res){
		res.render('signup', {
			title : 'Signup'
		});
	});

	app.post('/signup', function (req, res, next){
		User.createUserWithPassword({
			email: req.param('email')
		},
		req.param('password'),
		function(err, user){
			if (err) { return next(err); }
			req.logIn(user, function(err) {
		      if (err) { return next(err); }
		      res.redirect('/register');
		    });
		});
	});
		
	app.get('/logout', function (req, res) {
	  req.logout();
	  res.redirect('/');
	});
	

	
	/*
	 * Email verification
	 * 
	 */
	app.get('/register', function (req, res, next) {
	  var UserModel = require('../models/user').model;
	  if(req.query.verify){ //user coming back to verify account
	    return UserModel.findOne({ activation_token: req.query.verify }, 
	    	function (err, user) {
		    	if (err) { return next(err); }
				if (user && activation_token !== '') {
					user.active = true;
					user.save();
					// TODO : move the render to be a callback to use.save
					res.render('register', {
						title: 'Register Success - Active user.',
						newUser: user
					});
				} else {
					res.render('register', {
					title: 'Register Failed - No matching token.'
					});
				}
	    	}
    	);
	  } else { //user just signed up
	    winston.info('req.user:');
	    winston.info(req.user);
	    res.render('register', {
	      title: 'Thanks for signing up. Check your email.'
	    });
	  }
	});

	/**
	 * @param req : json object. Should have properties for deviceId, timestamp, log types + log values

	    POST sample:
	      POST /log HTTP/1.1
	      Accept: application/json
	      Content-Encoding: identity
	      Content-Type: application/json

	      {"deviceId":"testDeviceId","userKey":"testUserKey","logs":[{"type":"light","value":12.5,"timestamp":1338609482898}]}

	 */
	app.post('/log', function (req, res, next) {
	  // TODO : do some sort of device+key verification 
	  // TODO : log the log to mongo

	  winston.info(req);
	  var logs = req.param('logs', []);
	  for (var i = 0, length = logs.length; i < length; i++){
	    
	  }

	  mongodb.connect(app.config.mongoUrl, function(err, conn){
	    winston.info('connected to mongodb');
	    conn.collection('sensor_logs', function(err, coll){
	      winston.info('writing to sensor_logs :', logs[0]);
	      coll.insert( logs[0], {safe:true}, function(err){
	        winston.info('wrote to sensor_logs');
	        if (err) { return next(err); }
	        conn.close();
	      });
	    });
	  });

	  res.json({
	    'request' : {
	      'deviceId' : req.param('deviceId', ''),
	      'deviceKey' : req.param('deviceKey', ''),
	      'logs' : req.param('logs', [])
	    },
	    'targetControlStates' : {
	      'control1' : true,
	      'control2' : false
	    }
	  });
	});


	app.get('/robots.txt', function (req, res){
	  res.send('User-agent: *\r\nDisallow: /');
	});


	require('./admin')(app);
	require('./api')(app);
	require('./dashboard')(app);
	require('./demo')(app);
	require('./setup')(app);
	require('./styleguide')(app);

	// The call to app.use(app.router); is to position the route handler in the middleware chain.
	// Everything afterward is assumed to have not matched a route.
	// https://github.com/visionmedia/express/blob/master/examples/error-pages/index.js
	app.use(app.router);
};