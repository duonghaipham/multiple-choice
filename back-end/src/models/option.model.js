const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionSchema = new Schema({
  content: {
    type: String
  }
});

const optionModel = new mongoose.model('Option', optionSchema, 'options');

module.exports = optionModel;