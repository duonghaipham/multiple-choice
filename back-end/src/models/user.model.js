const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  gender: {
    type: String,
    enum: ['Nam', 'Nữ'],
    default: 'Nam'
  },
  city: {
    type: String,
    default: null
  },
  phone: {
    type: String,
    default: null
  },
  avatar: {
    type: String,
    default: null
  },
  password: {
    type: String,
    default: null
  },
  grade: {
    type: Number,
    default: 12
  },
  roles: {
    type: [String]
  },
  state: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive'
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
});

const userModel = mongoose.model('user', userSchema, 'users');

module.exports = userModel;