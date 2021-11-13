const jwt = require('jsonwebtoken');
const constants = require('./constant.config');

const encodedToken = async (
	secretKey,
	user,
	expire = constants.JWT_EXPIRES_TIME,
) => {
	return await jwt.sign(
		user,
		secretKey,
		{ expiresIn: expire },
	);
};

module.exports = {
	encodedToken,
};