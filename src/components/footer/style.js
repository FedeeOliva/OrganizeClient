import styled from '@emotion/styled';
import {Container} from '../container';

export const Footer = styled.footer`
	background: ${ ({theme}) => theme.colors.primaryDark};	
	width: 100%;	
`;

export const FooterContainer = styled(Container)`
	color: ${ ({theme}) => theme.textColor.white};	
	display: flex;
	flex-direction: column;
	font-family: ${ ({theme}) => theme.fontFamily.Roboto};
	font-size: 0.8em;
	text-align: center;

	${ ({theme}) => theme.breakpoint.desktop }{
		flex-direction: row;
		justify-content: space-between;
		height: 2.4em; /* 50/16 */
		align-items: center;		
	}
`;