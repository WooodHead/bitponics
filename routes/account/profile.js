var UserModel = require('../../models/user').model,
	routeUtils = require('../route-utils'),
	winston = require('winston');


module.exports = function(app){
  app.get('/account/profile', 
		routeUtils.middleware.ensureSecure,
		routeUtils.middleware.ensureLoggedIn,
		function (req, res){

			res.render('account/profile', {
				title : 'Profile',
				className: "app-page single-page profile",
    			pageType: "app-page"
			});
		}
	);

	app.put('/account/profile', 
		routeUtils.middleware.ensureSecure,
		routeUtils.middleware.ensureLoggedIn,
		function (req, res, next){
			UserModel.findById(req.user, function (err, user) {
				if (err) { next(err); }

		    user.email = req.body.email;
		    user.name = { 
		    	'first' : req.body.firstname,
		    	'last' : req.body.lastname
		    };
		    user.locale.territory = req.body.locale_timezone;
		    user.timezone = req.body.country_timezone;
		    user.phone = req.body.phone;
		    // user.address = {
		    // 	line1 : req.body.addressline1,
		    // 	line2 : req.body.addressline2,
		  		// city : req.body.city,
		  		// state : req.body.state,
		  		// zip : req.body.zip,
		  		// country : req.body.country
		    // };
		    user.notificationPreferences = {
			  	email: req.body.notifications_email,
			  	sms: req.body.notifications_sms
			  };

			  var locals = {
			  	title : 'Profile',
				className : 'profile',
				className: "app-page single-page profile",
    			pageType: "app-page"
			  }

		    user.save(function (err, updatedUser) {
		      if (err) { return next(err); }
          locals.user = updatedUser;
	      	res.render('account/profile', locals);
		    });
		  });
		}
	);
};