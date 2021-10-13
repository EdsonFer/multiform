import styled from 'styled-components';

export const Container = styled.div`
	p {
		font-size: 0.813rem;
		color: #b8b8d4;
	}

	h1 {
		margin: 0;
		padding: 0;
		font-size: 1.625rem;
	}

	hr {
		height: 1px;
		border: 0;
		background-color: #16195c;
		margin: 1.875rem 0;
	}

	label {
		font-size: 0.813rem;

		input {
			display: block;
			margin-top: 0.438rem;
			box-sizing: border-box;
			width: 100%;
			padding: 1.25rem 0.625rem;
			border: 2px solid #25cd89;
			border-radius: 0.625rem;
			color: #fff;
			outline: 0;
			font-size: 1rem;
			background-color: #02044a;
		}
	}

	button {
		background-color: #25cd89;
		color: #fff;
		font-size: 0.875rem;
		font-weight: bold;
		padding: 1.25rem 2.5rem;
		border: 0;
		border-radius: 1.875rem;
		cursor: pointer;
		margin-top: 1.875rem;
	}

	.backButton {
		font-size: 1rem;
		text-decoration: none;
		padding: 1.25rem 2.5rem;
		color: #b8b8d4;
	}
`;
