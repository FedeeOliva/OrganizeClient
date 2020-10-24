import React from 'react';
import styled from '@emotion/styled';
import ondas from '../../assets/Waves.png';

const Ondas = styled.img`
	display: none;

	${ ({theme}) => theme.breakpoint.tablet}{
		display: block;
		position: absolute;
		height: 570px;
		top: 0;
		right: 0;
		z-index: -100;
	}

	${ ({theme}) => theme.breakpoint.desktop}{
		width: 100%;
		margin:0 ;
	}
`;

const Waves = (props) => {
  return (    
  		<Ondas src={ondas}/>

  )
}

export default Waves;