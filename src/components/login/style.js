import styled from '@emotion/styled'
import {Link} from "react-router-dom"; 


export const Title = styled.h2`
	color: ${({theme})=> theme.colors.primary};
	font-family: ${({theme}) => theme.fontFamily.Raleway};
	margin: 1em;
	text-align: center;
	width: 100%;
`;

export const LoginContainer = styled.div`
	align-items: center;
	background: ${({theme})=> theme.colors.white};
	display: flex;
	flex-direction: column;
	font-family: ${({theme}) => theme.fontFamily.Roboto};
	font-size: 1rem;
	justify-content: center;
	padding: ${ ({theme}) => theme.padding.s };
	width: 100%;
	max-width: 27.25em; /* 436/16 */
	margin: 0 auto;

	${ ({theme}) => theme.breakpoint.tablet}{
		border: 2px solid #BBBBBB;
		border-radius: 10px;
		padding: ${ ({theme}) => theme.padding.m };
	}
	${ ({theme}) => theme.breakpoint.desktop}{
		margin: 0;
		font-size: 0.9rem;
		width: 27.25em;
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const InputGroup = styled.div`
	display: flex;
	align-items: center;

	& > i{
		margin-right: 0.2em;
	}
`;

export const Input = styled.input`
	background: ${ ({theme}) => theme.colors.lightGrey};
	border-bottom: 2px solid ${ ({theme}) => theme.colors.primary};
	border: none;
	color: ${ ({theme}) => theme.textColor.black};
	height: 2.5em; /* 40/16 */
	margin: ${ ({theme}) => theme.margin.s} 0;
	padding-left: ${ ({theme}) => theme.padding.s};
	width: 100%;

	&:placeholder{
		color: ${ ({theme}) => theme.textColor.grey};
	}
`;
 
export const Icon = styled.i`
	color: ${({theme})=> theme.colors.primary};
	font-size: 1.5em;
	width: 10%;
`;

export const MyLink = styled(Link)`
	color: ${ ({theme}) => theme.textColor.grey};
	margin: ${ ({theme}) => theme.margin.s} 0;
	text-decoration: none;

	&:hover{
		text-decoration: underline; 
	}
`;


export const Text = styled.span`
	color: ${ ({theme}) => theme.textColor.grey};
	margin: ${ ({theme}) => theme.margin.s} 0;
`;

export const IconGroup = styled.div`
	display: flex;
	font-size: 1.25em;
	justify-content: space-around;
	margin: ${ ({theme}) => theme.margin.s} 0;
	padding-bottom: 1.5em;
	width: 80%;


`;