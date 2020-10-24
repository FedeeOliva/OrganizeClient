import styled from '@emotion/styled';

export const ListOfBoards = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 250px) ;
	gap: 50px;
	justify-content: center;
	width: 100%;
`;

export const Title = styled.h2`
	text-align: center;
	color: ${ ({theme}) => theme.textColor.black};
	font-family: ${({theme}) => theme.fontFamily.Raleway};
	font-size: 1.8em;
	margin: ${({theme}) => theme.margin.s} 0;
	padding: 0.8em;

	${ ({theme}) => theme.breakpoint.tablet}{
		color: ${ ({theme}) => theme.textColor.white};
	}
`

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;

	${ ({theme}) => theme.breakpoint.tablet}{
		padding: 0 ${({theme}) => theme.padding.l};
		max-width: ${({theme}) => theme.maxWidth};
	}
`;