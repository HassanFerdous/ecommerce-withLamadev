const CryptoJS = require('crypto-js');
const userModel = require('../models/User');
const jwt = require('jsonwebtoken');

const router = require('express').Router();

//REGISTER
router.post('/register', async (req, res) => {
	let encrypted = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET).toString();
	let userData = { ...req.body, password: encrypted };

	let newUser = new userModel(userData);
	try {
		let savedUser = await newUser.save();
		res.status(200).json(savedUser);
	} catch (err) {
		res.status(500).json({
			msg: err.message,
		});
	}
});

//SIGNIN
router.post('/signin', async (req, res) => {
	let originalPassword = req.body.password;

	try {
		let user = await userModel.findOne({ username: req.body.username });
		if (!user) return res.status(401).json('Wrong credentials!');
		let encryptPass = CryptoJS.AES.decrypt(user.password, process.env.SECRET);
		let decryptedPass = encryptPass.toString(CryptoJS.enc.Utf8);

		//Return if password-not matched
		if (originalPassword !== decryptedPass) {
			res.status(401).json('Wrong credentials!');
			return;
		}

		//RESPONSE USER AND USER-TOKEN
		let token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '2d' });
		let { password, ...othersInfo } = user._doc;

		res.status(200).json({ ...othersInfo, access_token: token });
	} catch (err) {
		res.status(500).json({ msg: err.message });
	}
});

module.exports = router;
