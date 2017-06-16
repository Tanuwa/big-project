var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var foodSchema = new Schema({
	name: String,
	type: String,
	servingsize: Number,
	calories: Number,
	fat: Number,
	sugar: Number
});

module.exports = mongoose.model("Food", foodSchema);
