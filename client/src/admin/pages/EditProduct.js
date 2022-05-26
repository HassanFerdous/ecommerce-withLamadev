import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../style/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import { getProducts } from '../../redux/apiCalls';

export default function EditProduct() {
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		price: '',
		color: '',
		categories: '',
		size: '',
		inStock: '',
	});
	const dispatch = useDispatch();
	const params = useParams();
	const product = useSelector((state) => state.productReducer.products.find((p) => p._id === params.id));

	useEffect(() => {
		getProducts(dispatch);
		setFormData();
	}, [dispatch]);

	useEffect(() => {
		console.log(product);
	}, [product]);

	const handleProductSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<>
			{product ? (
				<div className='content' style={{ minHeight: '100vh', background: '#9fcaff54' }}>
					<form onSubmit={handleProductSubmit} encType='multipart/form-data' style={{ padding: '20px' }}>
						<input
							className='m-2 form-control'
							type='text'
							onChange={handleChange}
							name='title'
							placeholder='Title'
							value={product.title}
						/>
						<input
							className='m-2 form-control'
							type='text'
							onChange={handleChange}
							name='description'
							placeholder='description'
							value={product.description}
						/>
						<input
							className='m-2 form-control'
							type='file'
							onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.files[0] })}
							name='img'
							placeholder='img'
						/>
						<input
							className='m-2 form-control'
							type='number'
							onChange={handleChange}
							name='price'
							placeholder='price'
							value={product.price}
						/>

						<input
							className='m-2 form-control'
							type='text'
							onChange={handleChange}
							name='color'
							placeholder='Colors'
							value={product.color}
						/>
						<input
							className='m-2 form-control'
							type='text'
							onChange={handleChange}
							name='categories'
							placeholder='Categories'
							value={product.categories}
						/>
						<input
							className='m-2 form-control'
							type='text'
							onChange={handleChange}
							name='size'
							placeholder='Sizes'
						/>

						<input
							className='m-2 form-control'
							type='text'
							onChange={handleChange}
							name='inStock'
							placeholder='InStock'
							value={product.inStock}
						/>
						<input className='m-2 btn btn-primary' type='submit' value='UPDATE PRODUCT' />
					</form>
				</div>
			) : (
				<Loader />
			)}
		</>
	);
}
