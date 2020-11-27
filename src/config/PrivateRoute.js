import React, {useContext, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../context/authenticate/authContext';
import useSpinner from '../hooks/useSpinner';

const PrivateRoute = ({component: Component, ...props}) => {

	const {authenticate, getUserAuth } =  useContext(AuthContext);
  const [Spinner, loading, setLoading ,Centered] = useSpinner(true);

	useEffect(()=>{
    const getUser = async () =>{
      try{
        await getUserAuth();        
      }catch(error){
        console.log(error);
      }
      setLoading(false); 
    }
    getUser();

    //eslint-disable-next-line
	},[]);

  return (
    loading?
    <Centered>
          <Spinner/>
    </Centered>
    :
    <Route {...props} render = { props => !authenticate ? (        
    		<Redirect to="/" />
    	): (
    		<Component {...props}/>
    	)}/>


  );
}

export default PrivateRoute;