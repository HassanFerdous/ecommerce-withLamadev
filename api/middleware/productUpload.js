const multer = require('multer');
const path = require('path');

// PATH OF IMAGE FOLDER
let dist = path.join(__dirname, '/../../client/public/images');

const storage = multer.diskStorage({
	destination: function (req, res, cb) {
		cb(null, dist);
	},
	filename: function (req, file, cb) {
		let extName = path.extname(file.originalname);
		cb(null, file.fieldname + '-' + Date.now() + extName);
	},
});

const upload = multer({ storage });

module.exports = upload;
