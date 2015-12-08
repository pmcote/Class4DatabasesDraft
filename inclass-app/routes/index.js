var mongoose = require('mongoose');
var Robot = require('../models/robotModel.js');

var routes = {};

routes.home = function(req, res) {
    //write your mongoose queries here
    res.render('robots', <your robots object here>);
}

module.exports = routes;
