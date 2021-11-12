const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  exam: {
    type: Schema.Types.ObjectId
  },
  order: {
    type: Number,
    default: 1
  },
  content: {
    type: String,
    default: null
  },
  options: [{
    _id: Schema.Types.ObjectId,
    content: String
  }],
  correctOption: {
    type: Schema.Types.ObjectId
  }
});

const questionModel = new mongoose.model('question', questionSchema, 'questions');

module.exports = questionModel;