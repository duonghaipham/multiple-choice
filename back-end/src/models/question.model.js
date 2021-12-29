const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  content: {
    type: String,
    default: null
  },
  options: [{
    type: Schema.Types.ObjectId,
    ref: 'Option'
  }],
  correctOption: {
    type: Schema.Types.ObjectId,
    ref: 'Option'
  }
});

const questionModel = new mongoose.model('Question', questionSchema, 'questions');

module.exports = questionModel;