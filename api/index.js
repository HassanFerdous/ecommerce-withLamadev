const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

//internal-imports
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');

//config dot-env
require('dotenv').config();

//init-app
const app = express();
app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//connect-db
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log('db connect successfully'))
	.catch((err) => console.log(err));

//AUTH ROUTE
app.use('/api/auth/', authRouter);

//USERS ROUTE
app.use('/api/users/', userRouter);

//PRODUCTS
app.use('/api/products/', productRouter);

//Error Handling middleware
app.use((err, req, res, next) => {
	res.status(422).send({ error: err.message });
});

app.listen(process.env.PORT || 5000, () => {
	console.log(`server running on port  ${process.env.PORT || 5000}`);
});
