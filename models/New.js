const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const newsSchema = new Schema({
	title: String,
	description: String,
	author: String,
	link: String
});

const New = mongoose.model('New', newsSchema);
module.exports = New;
