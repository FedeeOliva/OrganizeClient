import React, {useState} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styled from '@emotion/styled'

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const useSpinner = (initialState = false) => {

	const [loading, setLoading] = useState(initialState);

	const mySpinner = () =>(
		 <Spinner animation="border" role="status">
              <span className="sr-only">Cargando...</span>
         </Spinner>
			)	

  	return [mySpinner, loading, setLoading, Centered];
}

export default useSpinner;