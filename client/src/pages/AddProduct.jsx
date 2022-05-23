import React, { useState } from 'react';

export default function AddProduct() {
	const [formData, setFormData] = useState({});

	const handleProductSubmit = (e) => {
		e.preventDefault();

		let data = new FormData();

		for (let [key, value] of Object.entries(formData)) {
			data.append(key, value);
		}

		const uploadProduct = async () => {
			try {
				let res = await fetch('http://localhost:5000/api/products/new', {
					method: 'POST',
					body: data,
					headers: {
						access_token:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjgwYWMwMDgwNzMzYzhhZTkxZDI5ZGQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NTI3NzI2NTAsImV4cCI6MTY1Mjk0NTQ1MH0.tzBAdK-wNrR5Z-qdaLZBYCU50Wew0luTCCih1SMeqTU',
					},
				});
				console.log(res);
			} catch (err) {
				console.log(err);
			}
		};
		uploadProduct();
	};

	const handleChange = (e) => {
		if (e.target.name === 'img') {
			setFormData({ ...formData, [e.target.name]: e.target.files[0] });
			return;
		}
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<form onSubmit={handleProductSubmit} encType='multipart/form-data'>
				<input type='text' onChange={handleChange} name='title' placeholder='Title' />
				<input type='text' onChange={handleChange} name='description' placeholder='description' />
				<input type='file' onChange={handleChange} name='img' placeholder='img' />
				<input type='number' onChange={handleChange} name='price' placeholder='price' />
				<input type='submit' value='ADD PRODUCT' />
			</form>
		</div>
	);
}
