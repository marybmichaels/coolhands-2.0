var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blankSchema = new Schema({
  blank: { type: String, required: true }
}, { timestamps: { createdAt: 'created_at' } });

var Blank = mongoose.model("blank", blankSchema, "Blank");

module.exports = Blank;