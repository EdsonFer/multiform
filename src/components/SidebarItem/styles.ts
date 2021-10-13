import styled from 'styled-components';

export const Container = styled.div`
	margin: 1.875 0;
	cursor: pointer;
	margin: 1rem;

	a {
		display: flex;
		align-items: center;
		text-decoration: none;
	}
`;

export const Info = styled.div`
	flex: 1;
	margin-right: 1.25rem;
`;

export const Title = styled.div`
	text-align: right;
	font-weight: bold;
	margin-bottom: 0.313rem;
	font-size: 1rem;
	color: #fff;
`;

export const Description = styled.div`
	text-align: right;
	font-size: 0.813rem;
	color: #b8b8d4;
`;

export const IconArea = styled.div<{ active: boolean }>`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: ${props => (props.active ? '#25cd89' : '#494a7c')};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Point = styled.div<{ active: boolean }>`
	width: 6px;
	height: 6px;
	border: 3px solid #494a7c;
	border-radius: 50%;
	margin-left: 1.875rem;
	margin-right: -1.4rem;
	background-color: ${props => (props.active ? '#25cd89' : '#02044a ')};
`;
