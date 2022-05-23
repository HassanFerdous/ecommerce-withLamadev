import React from 'react';

import styled from 'styled-components';

const FormGroup = styled.div`
	position: relative;
`;

const FormLabel = styled.label`
	display: block;
	margin-bottom: 6px;
`;
const FormInput = styled.input`
	border: 1px solid black;
	padding: 10px;
	background: transparent;
`;

export default function FormField({ label, type, placeholder, name, handler }) {
	return (
		<FormGroup>
			{label && <FormLabel>{label}</FormLabel>}
			<FormInput type={type} name={name} placeholder={placeholder} onChange={handler} />
		</FormGroup>
	);
}
