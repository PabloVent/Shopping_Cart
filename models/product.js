var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type:string, required:true},
    title: {type:string, required:true},
    description: {type:string, required:true},
    price: {type:Number, required:true}
})

model.exports = mongoose.model('Product', schema); // To use blueprint in my models.