import React,{useContext, useState} from 'react';
import {Title,LoginContainer, Form, MyLink as Link,
		InputGroup, Input, Icon} from './style';
import {Button} from '../button';
import AuthContext from '../../context/authenticate/authContext';
import useSpinner from '../../hooks/useSpinner';



const Login = ({setSingUp}) => {

    const authContext = useContext(AuthContext);
    const {logIn} = authContext;

    const [Spinner, loading, setLoading] = useSpinner();
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const {email, password} = data;
    const handleChange = e =>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if(email.trim() === '' || password.trim() === ''){
            console.log("Todos los campos son obligatorios");
        }
        setLoading(true);
        logIn({email,password});
    }


  return (
     <LoginContainer>
    	{
            loading?
             <Spinner/>
            :
            
            <>
            <Title>¡Inicia sesión!</Title>
                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Icon className="far fa-envelope"/>
                        <Input type="email" 
                            placeholder="Correo Electrónico"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Icon className="fas fa-unlock-alt"/>
                        <Input type="password" 
                            placeholder="Contraseña"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <Button mt="1.5em" type="submit"> 
                        Iniciar Sesión
                    </Button>
                    <Button outline onClick={() => setSingUp(true)}>
                        Registrarse
                    </Button>            
                </Form>
                <Link to="#">¿Olvidaste tu contraseña?</Link>
                </>
                }
    </LoginContainer>
  )
}

export default Login;