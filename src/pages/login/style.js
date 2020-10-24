import styled from '@emotion/styled';
import {Container} from '../../components/container';

export const Section = styled(Container)`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const Portada = styled.article`
	display: none;
	
	${ ({theme}) => theme.breakpoint.desktop }{
		font-size: 0.9em;
		display: block;
	}
`;

export const Title = styled.h2`

	${ ({theme}) => theme.breakpoint.desktop }{
		border-radius: 10px;
		display: block;
		font-family: ${ ({theme}) => theme.fontFamily.Ranga};
		font-weight: bold;
		font-size: 2.7em;
		color: ${ ({theme}) => theme.textColor.white};
		text-align: end;		
		text-shadow: 3px 3px #333;
	}
`;

export const Image = styled.img`
	

	${ ({theme}) => theme.breakpoint.desktop }{

		height: 25em; /* 400/16 */
		width: auto;
	}
`;
