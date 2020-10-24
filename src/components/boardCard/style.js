import styled from '@emotion/styled';

export const Card = styled.div`
	align-items: center;	
	border-radius: 5px;
	background: ${ ({theme}) => theme.colors.lightGrey};
	background-image: url(${({img}) => img});
	background-position: center; 
	background-size: cover; 
	display: flex;
	height: 200px;
	justify-content: center;
	max-width: 100%;
	cursor: pointer;
	transition: 0.3s;

	&:hover{
		transform: scale(1.05);
	}
`;

export const Title = styled.h2`
	color: ${ ({theme}) => theme.textColor.white};
	font-family: ${ ({theme}) => theme.fontFamily.Raleway};
	font-size: 1.3em;
	padding: ${ ({theme}) => theme.padding.s };
	text-align: center;
	width: 100%;
 	background: rgba(0,0,0,0.6);
`;