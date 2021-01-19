import React, {useContext, useState} from 'react';
import {Title,LoginContainer, Form, MyLink as Link,
		InputGroup, Input, Icon} from './style';
import {Button} from '../button';
import AuthContext from '../../context/authenticate/authContext';
import useSpinner from '../../hooks/useSpinner';
const Registry = ({setSingUp}) => {

    const authContext = useContext(AuthContext);
    const {regUser} = authContext;

    const [Spinner, loading, setLoading] = useSpinner();

    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        rePassword: ''
    });
    const {username, email , password, rePassword} = data;

    const onChange = e =>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        });
    }

    const setLogin = e =>{
        e.preventDefault();
        setSingUp(false);
    }

    const onSubmit = e =>{
        e.preventDefault();

        if( username.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            rePassword.trim() === ''
            ){
            //mostrar alerta error
            console.log('Todos los campos son obligatorios');
            return;
        }

        if(password.length < 6){
            console.log('La contraseña debe tener al menos 6 careacteres');
            return;
        }

        if(password !== rePassword){
            console.log('Las contraseñas no coinciden');
            return;
        }

        /*Me parece que no es necesario hacer async la funcion y tampoco
        volver a false el loading, ya que la pagina va a cambiar y si vuelve
        el estado ya estara por defecto en falso*/
        setLoading(true);
       regUser({
            username,
            email,
            password
        })
    }

  return (
    <LoginContainer>

    	{
        loading?
            <Spinner/>
        :
        <>
            <Title>Registrarse</Title>
                <Form onSubmit={onSubmit}>
                    <InputGroup>
                        <Icon className="far fa-user"/>
                        <Input type="text" 
                            placeholder="Nombre de Usuario"
                            name="username"
                            value={username}
                            onChange={onChange}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Icon className="far fa-envelope"/>
                        <Input type="email" 
                            placeholder="Correo Electrónico"
                            name="email"
                            value={email}
                            onChange={onChange}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Icon className="fas fa-unlock-alt"/>
                        <Input type="password" 
                            placeholder="Contraseña"
                            name="password"
                            value={password}
                            onChange={onChange}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Icon className="fas fa-unlock-alt"/>
                        <Input type="password" 
                            placeholder="Repetir contraseña"
                            name="rePassword"
                            value={rePassword}
                            onChange={onChange}
                        />
                    </InputGroup>
                    <Button mt="1.5em" type="submit"> 
                        Registrarse
                    </Button>          
                </Form>
                <Link to="#" onClick={setLogin}>¿Ya tienes cuenta?</Link>                   
            </>
                }
    </LoginContainer>  )
}

export default Registry;