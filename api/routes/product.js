const router = require('express').Router();
const fs = require('fs');

//INTERNAL IMPORT
const ProductModel = require('../models/Product');
const { verifyTokenAndAdmin } = require('./verifyToken');
const upload = require('../middleware/productUpload');
const path = require('path');

//ADD PRODUCT
router.post('/new', verifyTokenAndAdmin, upload.single('img'), async (req, res) => {
	let productData = { ...req.body, img: req.file.filename };

	try {
		let newProduct = await ProductModel(productData).save();
		res.status(200).json(newProduct);
	} catch (error) {
		// delete uploaded img
		if (req.file) {
			fs.unlink(path.join(__dirname, `../../client/public/images/${req.file.filename}`), (err) => {
				if (err) console.log(`${err.path} is not found!!`);
			});
		}
		res.status(500).json(error);
	}
});

//GET ALL PRODUCTS
router.get('/', async (req, res) => {
	let qCategory = req.query.category;
	let qNew = req.query.new;

	try {
		let products;
		if (qCategory) {
			products = await ProductModel.find({ categories: { $in: [qCategory] } });
		} else if (qNew) {
			products = await ProductModel.find().sort({ createdAt: -1 });
		} else {
			products = await ProductModel.find({});
		}
		res.status(200).json(products);
	} catch (error) {
		res.status(500).join(error);
	}
});

//GET PRODUCT BY ID
router.get('/:id', async (req, res) => {
	try {
		let product = await ProductModel.findById(req.params.id);
		res.status(200).json(product);
	} catch (error) {
		res.status(200).json(error);
	}
});

//UPDATE PRODUCT
router.put('/:id', verifyTokenAndAdmin, upload.single('img'), async (req, res) => {
	let data = req.body;
	req.file && (data = { ...req.body, img: req.file.filename });
	try {
		let product = await ProductModel.findById(req.params.id);
		let updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, { $set: data }, { new: true });

		// delete uploaded img
		if (req.file) {
			fs.unlink(path.join(__dirname, `../../client/public/images/${product.img}`), (err) => {
				if (err) console.log(`${err.path} is not found!!`);
			});
		}
		res.status(200).json(updatedProduct);
	} catch (error) {
		if (req.file) {
			fs.unlink(path.join(__dirname, `../../client/public/images/${req.file.filename}`), (err) => {
				if (err) console.log(`${err.path} is not found!!`);
			});
		}
		res.status(500).json(error.message);
	}
});

//DELETE PRODUCT
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		let deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);

		//delete uploaded img
		fs.unlink(path.join(__dirname, `../../client/public/images/${deletedProduct.img}`), (err) => {
			if (err) console.log(`${err.path} is not found!!`);
		});

		res.status(200).json('Product has been deleted successfully!');
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
