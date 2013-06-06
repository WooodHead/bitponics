
/**
 * Module dependencies.
 */

require('nodetime').profile({
  accountKey: 'a45c389ba34a59d440401f32a925a2c8ce3b4b9f', 
  appName: 'Bitponics ' + (process.env.NODE_ENV || 'local')
});

var express    = require('express'),
    app        = module.exports = express(),
    server     = require('http').createServer(app),
    io         = require('socket.io').listen(server),
    winston    = require('winston');

app.socketIOs = [io];

// Configure the app instance
require('./config')(app);

// Add Routes to the app
require('./routes')(app);

/** 
 *  Error handling 
 *  Should be done last after all routes & middleware
 *  References:
 *  http://expressjs.com/guide.html
 */
require('./config/error-config')(app);


// Finally, start up the server
server.listen(process.env.PORT || 80, function(){
  //var address = server.address();
  //app.config.appUrl = 'http://' + address.address + (address.port == 80 ? '' : ':' + address.port);
  
  winston.info('Express server running at ' + JSON.stringify(server.address()));
  winston.info('app.config.appUrl = ' + app.config.appUrl);
});

// https will only get set up on local. 
// Heroku handles it for us with a proxy
if (app.config.https){
  app.config.https.server.listen(443, function(){
    winston.info('started https server');
  });
}