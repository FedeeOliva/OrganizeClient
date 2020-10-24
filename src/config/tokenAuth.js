import Axios from './Axios.js';

//Si a la peticion Axios le paso un token creara x-auth-token y enviara
//el token como valor, sino le pasamos lo elimina de la peticion

const tokenAuth = token => {
	if(token){
		Axios.defaults.headers.common['x-auth-token'] = token;
	}else{
		delete Axios.defaults.headers.common['x-auth-token'];
	}
}

export default tokenAuth;