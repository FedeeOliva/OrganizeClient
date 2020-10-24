import styled from '@emotion/styled';
import {Container} from '../container';

export const Modal = styled.div`
	align-items: center;
	display: flex;
	height: 100vh;
	justify-content: center;
	left: 0;
	overflow: auto;
	position: fixed;
	top: 0;
	width: 100vw;
	z-index: 10000;
 	background-color: rgba(0,0,0,0.7);
`; 

export const ModalContent = styled(Container)`	
	display: flex;
	justify-content: center;
`
export const CloseButton = styled.i`
	color: white;
	cursor: pointer;
	font-size: 2em;
	position: absolute;
	right: 20px;
	top: 5px;
`;