import React, {useContext, useEffect} from 'react';
import Login from '../../components/login';
import Layout from '../../components/layout';
import Waves from '../../components/waves';
import {Section, Portada, Title, Image} from './style';
import PortadaImage from '../../assets/portada.svg'
import AuthContext from '../../context/authenticate/authContext';
import useSpinner from '../../hooks/useSpinner';

const LoginPage = (props) => {

    const {authenticate, getUserAuth} = useContext(AuthContext);
    const [Spinner, loading, setLoading ,Centered] = useSpinner(true);
    
    useEffect(()=>{     
        const isAuth = async () =>{ 
            await getUserAuth();            
            setLoading(false);                                  
        }
        if(authenticate){
            props.history.push('/user');
        }else{
            isAuth(); 
        }   
        // eslint-disable-next-line
    }, [authenticate]);    

  return (
    loading? 
    <Centered>
        <Spinner/>
    </Centered>
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