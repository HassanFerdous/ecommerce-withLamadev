const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
	let authToken = req.headers.access_token.split(' ')[1];
	if (authToken) {
		jwt.verify(authToken, process.env.JWT_SECRET, function (err, user) {
			if (err) return res.status(403).json('Invalid Token !');
			req.user = user;
			next();
		});
	} else {
		return res.status(401).json('You are not authenticated');
	}
};

const verifyTokenAndAuthorization = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.userId === req.params.id || req.user.isAdmin) {
			next();
		} else {
			res.status(500).json('Your not allowed to do that!');
		}
	});
};

const verifyTokenAndAdmin = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.isAdmin) {
			next();
		} else {
			res.status(500).json('Your not allowed to do that!');
		}
	});
};

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };
