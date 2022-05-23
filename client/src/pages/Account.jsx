import React from 'react';
import { useSelector } from 'react-redux';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	width: 100%;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 30px 20px;
	margin-top: 10px;
	width: 100%;
`;
function Account() {
	const user = useSelector((state) => state.user.currentUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const userLogout = () => {
		dispatch(logout());
		navigate('/');
	};

	return (
		<>
			<Announcement />
			<Navbar />
			<div>
				<Container>
					<Header>
						<span>{user.username}</span>
						<button onClick={userLogout}>Logout</button>
					</Header>
				</Container>
			</div>
		</>
	);
}

export default Account;
