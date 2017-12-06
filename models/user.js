var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
    email:{type:String, required:true},
    password:{type:String, required:true}
});

/* Create helper method to encrypt password; this will be used in our middleware which 
creates new users in passport.js file.
*/

userSchema.methods.encryptPassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSalt(5), null);
}

// Check if the password matches the hatched password.
userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);// 'this' corresponds to the current user's password, (line 7).
}
module.exports = mongoose.model('User', userSchema);