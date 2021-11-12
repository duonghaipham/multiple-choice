const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId
  },
  candidate: {
    type: Schema.Types.ObjectId
  },
  exam: {
    type: Schema.Types.ObjectId
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
      question: Schema.Types.ObjectId,
      option: Schema.Types.ObjectId
    }
  ],
  outOf: {
    type: Number,
    default: 0
  }
});

const workModel = mongoose.model('work', workSchema, 'works');

module.exports = workModel;