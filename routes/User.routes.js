var express = require('express');
var router = express.Router();

const UserController = require('../controller/User.Controller');

router.get('/profile', UserController.clientprofile);
router.get('/clist', UserController.contractorlist);
router.get('/login', UserController.login);
router.get('/homepage', UserController.homepage);
router.get('/register', UserController.renderSignup);
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/viewprofile', UserController.viewprofile);
router.get('/updateprofile', UserController.updateprofile);
router.get('/search', UserController.search);

module.exports = router;
