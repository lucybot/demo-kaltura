var Express = require('express');
var App = Express();

App.use(Express.static(__dirname + '/static'));

require('./Kaltura-routes.js').setRoutes(App);

App.listen(3333);
