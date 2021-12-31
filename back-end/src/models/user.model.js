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
  password: {
    type: String,
    default: null
  },
  grade: {
    type: Number,
    default: 12
  },
  avatar: {
    type: String,
    default: 'https://blog.netsarang.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
  },
  role: {
    type: String,
    enum: ['teacher', 'admin', 'student'],
    default: 'student'
  },
  state: {
    type: String,
    enum: ['active', 'inactive', 'deleted'],
    default: 'inactive'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

userSchema.pre('save', async function (next) {
	try {
    const saltRounds = parseInt(process.env.SALT_ROUND);
    const hashPassword = await bcrypt.hash(this.password, saltRounds);
    this.password = hashPassword;

    next();
	} catch (error) {
		next(error);
	}
});

const userModel = mongoose.model('User', userSchema, 'users');

module.exports = userModel;