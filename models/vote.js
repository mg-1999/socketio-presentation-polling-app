var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var voteSchema = new Schema({
  name: String,
  vote: Number
});

voteSchema.methods.add = function(name, callback){
  this.name = name;
  return this.save(callback);
}

// the schema is useless so far
// we need to create a model using it
var Vote = mongoose.model('Vote', voteSchema);

// make this available to our users in our Node applications
module.exports = Vote;