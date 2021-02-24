import React, {useContext, useEffect} from 'react';
import Login from '../../components/login';
import Layout from '../../components/layout';
import Waves from '../../components/waves';
import {Section, Portada, Title, Image} from './style';
import PortadaImage from '../../assets/portada.svg'
import AuthContext from '../../context/authenticate/authContext';

const LoginPage = (props) => {

    const {authenticate, error, loading, getUserAuth} = useContext(AuthContext);
    
    useEffect(()=>{
        if(!authenticate && !loading)    
            getUserAuth();        
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if(authenticate){
            props.history.push('/user');
        }
        // eslint-disable-next-line
    },[authenticate]);

    useEffect(() => {
        if(error){
            props.history.push('/');
        }
        // eslint-disable-next-line
    },[error]);       

  return (
    loading? 
    <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border" role="status">
             <span className="sr-only">Loading...</span>
        </div>
    </div>    
    :
    <Layout>
    	<Waves/>
    	<Section>    		
    		<Portada>
    			<Title>¡Organizate de la mejor manera!</Title>    			
    			<Image src={PortadaImage} alt="Tablero con tareas"/>
    		</Portada>
    		<Login/>
    	</Section>    	
    </Layout>
  )
}

export default LoginPage;