//Require Mongoose
var mongoose = require('mongoose');

//Định nghĩa một schema
var Schema = mongoose.Schema;


 var categorySchema = new Schema({
   name:  {type: String, unique : true, required : true, dropDups: true},
   description: {type: String, default: null},
   image: {type: String, default: null}
 });


module.exports = mongoose.model('categories', categorySchema);