import styled from '@emotion/styled';
import {Link} from "react-router-dom";
import {Container} from '../container';

export const Navbar = styled.nav`
	background: ${ ({theme}) => theme.colors.primary };
	color: ${ ({theme}) => theme.textColor.white};	
	font-family: ${ ({theme}) => theme.fontFamily.Ranga};
	font-size: 2.5em;
	height: 3.75rem; /* 60/16 */
	padding: 0 ${ ({theme}) => theme.padding.s } ;
	width: 100%;
`;

export const Nav = styled(Container)`
	height: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	
`
export const Brand = styled(Link)`
	color: ${ ({theme}) => theme.textColor.white};
	position: absolute;
	&:hover{
		color: ${ ({theme}) => theme.textColor.white};
		text-decoration: none;
	}

`
export const Cerrar = styled.button`
	background: none;
	border: none;
	color: ${ ({theme}) => theme.textColor.white};
	font-size: 0.3em;
	font-family: ${ ({theme}) => theme.fontFamily.Roboto};
	position: absolute;
	right: 5px;

`