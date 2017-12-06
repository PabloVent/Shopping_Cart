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

// Create users. New middleware.

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passwordField: true
}, function(req, email, password, done) {
    User.findOne({'email': email}, function(err, user){
        if(err){
            return done(err);
        }
        if(user){
            return(done(null, false, {message: 'Email is already in use'})); // No errors(null), but search not successful (false); password already in use.
        }
    });
}));

