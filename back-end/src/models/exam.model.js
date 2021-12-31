const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examSchema = new Schema({
  name: {
    type: String
  },
  openedAt: {
    type: Date,
    default: Date.now()
  },
  closedAt: {
    type: Date,
    default: Date.now()
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  attemptLimit: {
    type: Number,
    default: 1
  },
  minuteLimit: {
    type: Number,
    default: 0
  },
  questions: [{
    type: Schema.Types.ObjectId,
    ref: 'Question'
  }],
  subject: {
    type: String,
    default: null
  },
  grade: {
    type: Number,
    default: 12
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

const examModel = mongoose.model('Exam', examSchema, 'exams');

module.exports = examModel;