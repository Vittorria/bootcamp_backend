var express = require('express');
var router = express.Router();
var model = require("../services/general.model");


/** =========== GET /register - registers a new user ===========*/

router.post('/volunteers/add', function (req, res, next) {
    model.registerNewUser(req, res);
});


/** =========== GET /table - information about all the users ===========*/

router.get('/volunteers-no', function (req, res, next) {
    model.getVolunteersNo(req, res);
});

module.exports = router;

