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
	email: {
		type: String,
		unique: true
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

userSchema.pre('save', async function (next) {
	try {
		this.password = await bcrypt.hash(this.password);
		next();
	} catch (error) {
		next(error);
	}
});

const userModel = mongoose.model('user', userSchema, 'users');

module.exports = userModel;