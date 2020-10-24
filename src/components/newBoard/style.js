import styled from '@emotion/styled';
import {Button} from '../button';

export const Title = styled.h2`
	color: ${({theme})=> theme.colors.primary};
	font-family: ${({theme}) => theme.fontFamily.Raleway};
	margin: 0.6em;
	text-align: center;
`;

export const Form = styled.form`
	align-items: center;
	border-radius: 10px;
	background: #FFF;
	display: flex;
	flex-direction: column;
	font-family: ${({theme}) => theme.fontFamily.Roboto};
	height: 75vh;
	overflow: auto;
	padding:  ${({theme}) => theme.padding.s};
	width: 100%;

	${ ({theme}) => theme.breakpoint.tablet}{
		max-width: 27.25em;		
		padding: ${ ({theme}) => theme.padding.m };
	}
	${ ({theme}) => theme.breakpoint.desktop}{
		margin: 0;
		font-size: 0.9rem;
		padding: ${ ({theme}) => theme.padding.l };
		width: 27.25em;
	}

`

export const Input = styled.input`
	background: ${ ({theme}) => theme.colors.lightGrey};
	border-bottom: 2px solid ${ ({theme}) => theme.colors.primary};
	border: none;
	color: ${ ({theme}) => theme.textColor.black};
	height: 2.5em; /* 40/16 */
	margin: ${ ({theme}) => theme.margin.s} 0;
	min-height: 2em;
	padding-left: ${ ({theme}) => theme.padding.s};
	width: 100%;

	&:placeholder{
		color: ${ ({theme}) => theme.textColor.grey};
	}
`;

export const Subtitle = styled.h4`
	color: ${({theme})=> theme.textColor.black};
	font-size: 1em;
`;

export const Submit = styled(Button)`
	border-radius: 20px;
	padding: 0 20px;
`;