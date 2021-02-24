import React, {useContext, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../context/authenticate/authContext';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({component: Component, ...props}) => {

	const {authenticate, loading, getUserAuth } =  useContext(AuthContext);

	useEffect(()=>{
    if(!authenticate){
      getUserAuth();
    }
    //eslint-disable-next-line
	},[]);

  return (
    loading?
    <div className="d-flex justify-content-center align-items-center min-vh-100">
          <Spinner animation="border" role="status">
              <span className="sr-only">Cargando...</span>
          </Spinner>
    </div>
    :
    <Route {...props} render = { props => authenticate && !loading ? (        
    		<Component {...props}/>
    	): (
    		<Redirect to="/" />
    	)}/>


  );
}

export default PrivateRoute;