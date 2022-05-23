import styled from 'styled-components';

const LoaderWrap = styled.div`
	min-height: 30vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LoaderText = styled.p`
	font-size: 24px;
	color: black;
`;

export default function Loader() {
	return (
		<LoaderWrap>
			<LoaderText>Loading...</LoaderText>
		</LoaderWrap>
	);
}
