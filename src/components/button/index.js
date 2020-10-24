import styled from '@emotion/styled';

export const Button = styled.button`
	background: ${props => props.outline? 'none': props.theme.colors.primary};
	border: ${props => props.outline? `2px solid ${props.theme.colors.primary}`: 'none'};
	color: ${props => props.outline? props.theme.colors.primary : props.theme.textColor.white};
	cursor: pointer;
	height: 2.5em; 	 /* 40/16 */
	margin: 10px 0px;
	margin-top: ${props => props.mt? props.mt : null};

	&:hover{
		background: ${props => !props.outline? 'none': props.theme.colors.primary};
		border: ${props => !props.outline? `2px solid ${props.theme.colors.primary}`: 'none'};
		color: ${props => !props.outline? props.theme.colors.primary : props.theme.textColor.white};	}
`; 