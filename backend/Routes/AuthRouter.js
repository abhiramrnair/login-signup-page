const { signup, login } = require('../Controllers/AuthControl');
const { signupValid, loginValid } = require('../Middlewares/AuthValid');

const Router=require('express').Router();

Router.post('/signup', signupValid, signup);
Router.post('/login', loginValid, login);

module.exports=Router;