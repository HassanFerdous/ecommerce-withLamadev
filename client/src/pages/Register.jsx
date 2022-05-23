import { useState } from 'react';
import styled from 'styled-components';
import { register } from '../redux/apiCalls';
import { mobile } from '../responsive';
import { useDispatch } from 'react-redux';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
		url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: white;
	${mobile({ width: '75%' })}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
`;

const Register = () => {
	const [user, setUser] = useState({});
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (user.password !== user.cnfPassword) return;
		let { username, email, password } = user;
		register(dispatch, { username, email, password });
	};

	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form onSubmit={handleSubmit}>
					<Input type='text' placeholder='username' name='username' onChange={handleChange} />
					<Input type='email' placeholder='email' name='email' onChange={handleChange} />
					<Input type='password' placeholder='password' name='password' onChange={handleChange} />
					<Input type='password' placeholder='confirm password' name='cnfPassword' onChange={handleChange} />
					<Agreement>
						By creating an account, I consent to the processing of my personal data in accordance with the{' '}
						<b>PRIVACY POLICY</b>
					</Agreement>
					<Button type='submit'>CREATE</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
