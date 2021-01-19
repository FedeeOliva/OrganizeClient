import React,{useContext, useState} from 'react';
import {Title,LoginContainer, Form, MyLink as Link,
		InputGroup, Input, Icon} from './style';
import {Button} from '../button';
import AuthContext from '../../context/authenticate/authContext';

const Login = ({setSingUp}) => {

    const authContext = useContext(AuthContext);
    const {loading, error, msg, logIn} = authContext;
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
        logIn({email,password});
    }


  return (
     <LoginContainer>
    	{
            loading?
             <div className="spinner-border" role="status">
                 <span className="sr-only">Loading...</span>
            </div>
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
                {error? 
                    <div className="alert alert-danger" role="alert">
                      {msg}
                    </div>
                 : null}
    </LoginContainer>
  )
}

export default Login;