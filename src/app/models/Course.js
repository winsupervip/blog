
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Course = new Schema({
 
  name: { type: String,require:true},
  desc: { type: String},
 
  thumbnail: { type: String},
 
  slug: { type: String, max:255 },
  videoId: { type: String, max:255 },
  level: { type: String },
  slug: { type: String, slug: 'name',unique:true }

},{timestamps:true});
module.exports=mongoose.model('Course',Course)