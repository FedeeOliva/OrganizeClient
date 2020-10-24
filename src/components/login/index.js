import React, {useState} from 'react';
import Login from './Login';
import SignUp from './SignUp';

const LoginComponent = (props) => {

    const[signup, setSingUp] = useState(false);
  return (
    signup?
        <SignUp
            setSingUp={setSingUp}
            />
    :
        <Login
            setSingUp={setSingUp}
            />     
  )
}

export default LoginComponent;