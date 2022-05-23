import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userRequest } from '../requestMethod';

function Products() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function getAllProducts() {
			try {
				let res = await userRequest.get('/products/');
				setProducts(res.data);
			} catch (error) {
				console.log(error);
			}
		}
		getAllProducts();
	}, []);

	const removeProduct = async (id) => {
		try {
			let deletedProduct = await userRequest.delete(`/products/${id}`);
			console.log(deletedProduct);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='content' style={{ minHeight: '100vh', background: '#9fcaff54' }}>
			<div className='container-fluid pt-4 px-4'>
				<div className='bg-light text-center rounded p-4'>
					<div className='d-flex align-items-center justify-content-between mb-4'>
						<h6 className='mb-0'>Products</h6>
						<Link to='#'>Add Product</Link>
					</div>
					<div className='table-responsive'>
						<table className='table text-start align-middle table-bordered table-hover mb-0'>
							<thead>
								<tr className='text-dark'>
									<th scope='col'>#</th>
									<th scope='col'>Title</th>
									<th scope='col'>Price</th>
									<th scope='col'>Id</th>
									<th scope='col'>Status</th>
									<th scope='col' style={{ width: '140px' }}>
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{products.map((product) => (
									<tr key={product._id}>
										<td className='d-flex align-items-center justify-content-center'>
											<img
												style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden' }}
												src={`/images/${product.img}`}
												alt=''
											/>
										</td>
										<td>{product.title}</td>
										<td>${product.price}</td>
										<td>{product._id}</td>
										<td>{product.status}</td>
										<td>
											<Link className='btn btn-sm btn-primary btn-secondary' to='#'>
												Edit
											</Link>
											<Link
												className='ms-3 btn btn-sm btn-primary btn-danger'
												to='#'
												onClick={() => removeProduct(product._id)}>
												Delete
											</Link>
										</td>
									</tr>
								))}
								{/* <tr>
									<td className='d-flex align-items-center justify-content-center'>
										<img
											style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden' }}
											src='/images/img-1652720992531.jpg'
											alt=''
										/>
									</td>
									<td>Men jeans</td>
									<td>75</td>
									<td>klsdflsfjdksfjl</td>
									<td>active</td>
									<td>
										<Link className='btn btn-sm btn-primary btn-secondary' to='#'>
											Edit
										</Link>
										<Link className='ms-3 btn btn-sm btn-primary btn-danger' to='#'>
											Delete
										</Link>
									</td>
								</tr> */}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Products;
