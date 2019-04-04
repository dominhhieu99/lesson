//Require Mongoose
var mongoose = require('mongoose');

//Định nghĩa một schema
var Schema = mongoose.Schema;


 var categorySchema = new Schema({
    name: { type: String, unique : true, required : true, dropDups: true},
    image: {type: String, default: null},
    detail: {type: String, default: null},
    price:{type: String, default: null},
    cate_id: { type: Schema.Types.ObjectId, ref: 'categories'}
 });


module.exports = mongoose.model('products', categorySchema);