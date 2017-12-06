var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done){
    done(null, user.id); // serialize user by id whenever you want to store it in your session.
}); // Tells passport how to store the user in the session.

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){ // in mongoDB using mongoose; id is stored in the session.
        done(err, user);
    })
})