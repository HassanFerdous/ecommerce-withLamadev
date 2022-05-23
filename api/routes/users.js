const express = require('express');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const CryptoJS = require('crypto-js');

//internal imports
const router = express.Router();
const UserModel = require('../models/User');

//USER UPDATE
router.put('/:id', verifyTokenAndAuthorization, async (req, res, next) => {
	let password = req.body.password;
	if (password) {
		req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET).toString();
	}

	try {
		let updatedUser = await UserModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
		res.status(200).json(updatedUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET ALL USER
router.get('/all', verifyTokenAndAdmin, async (req, res) => {
	try {
		let users = await UserModel.find();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET USER BY ID
router.get('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		let user = await UserModel.findById(req.params.id);
		let { password, ...othersInfo } = user._doc;
		res.status(200).json(othersInfo);
	} catch (err) {
		res.status(500).json(err);
	}
});

// DELETE USER
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		let user = await UserModel.findByIdAndDelete(req.params.id);
		res.status(200).json('User has been deleted...');
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
