const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workSchema = new Schema({
  candidate: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  exam: {
    type: Schema.Types.ObjectId,
    ref: 'Exam'
  },
  attempt: {
    type: Number,
    default: 1
  },
  submittedAt: {
    type: Date,
    default: Date.now()
  },
  secondTaken: {
    type: Number,
    default: 0
  },
  options: [
    {
      question: {
        type: Schema.Types.ObjectId,
        ref: 'Question'
      },
      option: {
        type: Schema.Types.ObjectId,
        ref: 'Option'
      }
    }
  ],
  outOf: {
    type: Number,
    default: 0
  }
});

const workModel = mongoose.model('Work', workSchema, 'works');

module.exports = workModel;