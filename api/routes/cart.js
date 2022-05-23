const router = require('express').Router();
const CartModel = require('../models/Cart');

router.post('/addToCart', async (req, res) => {
	let data = req.body;

	try {
		let cart = await CartModel(data).save();
		res.status(200).json(cart);
	} catch (error) {
		res.status(500).json(error);
	}
});
