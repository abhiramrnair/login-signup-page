const ensureAuth = require('../Middlewares/Auth');

const Router=require('express').Router();

Router.get('/', ensureAuth, (req, res) => {
    res.status(200).json([{name: "democontent"}])
});

module.exports=Router;