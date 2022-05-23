import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import axios from 'axios';
import Loader from './Loader';

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Products = ({ filters, sort, cat }) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilterProducts] = useState([]);

	//get-products
	useEffect(() => {
		const getProducts = async () => {
			try {
				let res = await axios.get(
					cat ? `http://localhost:5000/api/products?category=${cat}` : `http://localhost:5000/api/products/`
				);

				setProducts(res.data);
			} catch (error) {
				console.log(error.message);
			}
		};

		getProducts();
	}, [cat]);

	//filter
	useEffect(() => {
		setFilterProducts(
			filters &&
				products.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value)))
		);
	}, [filters, products]);

	//sort
	useEffect(() => {
		if (!sort) return;
		if (sort === 'newest') {
			setFilterProducts((prev) => prev.sort((a, b) => a.createdAt - b.createdAt));
		} else if (sort === 'asc') {
			setFilterProducts((prev) => prev.sort((a, b) => a.price - b.price));
		} else {
			setFilterProducts((prev) => prev.sort((a, b) => b.price - a.price));
		}
	}, [sort]);

	return (
		<Container>
			{cat ? (
				filteredProducts.length ? (
					filteredProducts.map((item) => <Product item={item} key={item._id} />)
				) : (
					<Loader />
				)
			) : products.length ? (
				products.slice(0, 8).map((item) => <Product item={item} key={item._id} />)
			) : (
				<Loader />
			)}
		</Container>
	);
};

export default Products;
