import styled from '@emotion/styled';

export const Background = styled.div`
	background-image: url(${ ({image = ''}) => image});
	background-size: cover;
	background-attachment: fixed;
	background-position: center;
	height: auto;
	max-height: calc(100vh - 60px); /*alto del navbar*/
	object-fit: cover;
	width: 100%;
`;

export const Listas = styled.section`
	display: flex;
	height: 90%;
	overflow-x: scroll;
`;
