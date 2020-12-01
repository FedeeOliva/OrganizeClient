import styled from '@emotion/styled';
import {Container} from '../container';

export const NavTools = styled.div`
	color: white;
	height: 40px;	
	width: 100%;
	background: rgba(0,0,0,0.5);

	
`;
export const ToolsContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: inherit;

	& > button{
		background: none;
		color: inherit;
		border: none;
	}
`;