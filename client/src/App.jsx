import { Routes, Route, Navigate } from 'react-router-dom';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import AddProduct from './admin/AddProduct';
import { useSelector } from 'react-redux';
import Admin from './admin/Admin';
import Clients from './admin/clients';
import Dashboard from './admin/dashboard';
import Products from './admin/products';
import LoginAdmin from './admin/loginAdmin';
import Account from './pages/Account';

const App = () => {
	const user = useSelector((state) => state.user.currentUser);
	return (
		<Routes>
			<Route exact path='/' element={<Home />} />
			<Route exact path='/admin/' element={user?.isAdmin ? <Admin /> : <Navigate to='/login-admin' replace />}>
				<Route path='' element={<Dashboard />} />
				<Route path='client' element={<Clients />} />
				<Route path='products' element={<Products />} />
				<Route path='products/add' element={<AddProduct />} />
			</Route>
			<Route path='/login-admin' element={!user?.isAdmin ? <LoginAdmin /> : <Navigate to='/admin' replace />} />
			<Route path='/products/:cat' element={<ProductList />} />
			<Route path='/product/:id' element={<Product />} />
			<Route path='/login' element={user ? <Navigate to='/' replace /> : <Login />} />
			<Route path='/register' element={user ? <Navigate to='/' replace /> : <Register />} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/account' element={user ? <Account /> : <Navigate to='/login' replace />} />
		</Routes>
	);
};

export default App;
