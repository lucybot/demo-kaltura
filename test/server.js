var Express = require('express');
var App = Express();

require('./Kaltura-routes.js').setRoutes(App);

App.listen(3000);