import styled from 'styled-components';

export const Container = styled.div<{ selected: boolean }>`
	display: flex;
	align-items: center;

	border: 2px solid ${props => (props.selected ? '#25CD89' : '#16195C')};
	border-radius: 0.625rem;
	padding: 1.25rem;
	margin-bottom: 1rem;

	cursor: pointer;

	&:hover {
		border: 2px solid #496459;
	}
`;

export const Icon = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background-color: #191a59;
	font-size: 1.563rem;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Info = styled.div`
	flex: 1;
	margin-left: 1.25rem;
`;

export const Title = styled.div`
	font-weight: bold;
	margin-bottom: 0.438rem;
`;

export const Description = styled.div`
	font-size: 0.875rem;
	color: #b8b8d4;
`;
