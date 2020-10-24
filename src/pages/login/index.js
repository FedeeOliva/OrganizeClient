import React, {useContext, useEffect} from 'react';
import Login from '../../components/login';
import Layout from '../../components/layout';
import Waves from '../../components/waves';
import {Section, Portada, Title, Image} from './style';
import PortadaImage from '../../assets/portada.svg'
import AuthContext from '../../context/authenticate/authContext';
import useSpinner from '../../hooks/useSpinner';

const LoginPage = (props) => {

    const {user} = useContext(AuthContext);
    const [Spinner, loading, setLoading ,Centered] = useSpinner(true);
    
//Revisa si hay un token y redirige. Si no lo hay recien muestra el login
//Esto tendria un problema si el token ya expiró
    useEffect(()=>{        
        const thereIsToken = async () =>{
          try{
            const token = await localStorage.getItem('token');
            if(token){
                props.history.push('/user');
            } else{
                setLoading(false);
            }
          }catch(error){
            console.log(error);
          }
        }
        thereIsToken()

        //eslint-disable-next-line
    }, [user]);
    

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