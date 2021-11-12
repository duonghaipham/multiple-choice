const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId
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
    default: null
  },
  attemptLimit: {
    type: Number,
    default: 1
  },
  minuteLimit: {
    type: Number,
    default: 0
  },
  subject: {
    type: String,
    default: null
  }
});

const examModel = mongoose.model('exam', examSchema, 'exams');

module.exports = examModel;