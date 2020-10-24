import React, {useReducer} from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import Axios from '../../config/Axios';
import tokenAuth from '../../config/tokenAuth';
import {FAIL_AUTHENTICATE,
		GET_USER, LOG_OUT} from '../types';


const AuthState = props => {

	const initialState = {
		authenticate: false,
		user: null,
		msg: null,
	}

	const [state, dispatch] = useReducer(authReducer, initialState);

	const regUser = async data =>{
		//Mandar datos al backend:
		try{
			const response = await Axios.post('/api/users', data);
			localStorage.setItem('token', response.data.token);
			await getUserAuth();

		}catch(error){
			dispatch({
				type: FAIL_AUTHENTICATE,
				payload: error.response.data.msg
			})
		}		
	}

	const getUserAuth = async () =>{
		try{
			const token = await localStorage.getItem('token');
			if(token){
				tokenAuth(token);
			}
			const response = await Axios.get('/api/auth');
			dispatch({
				type: GET_USER,
				payload: response.data.user
			});
		}catch(error){
			dispatch({
				type: FAIL_AUTHENTICATE,
				payload: error.response.data.msg
			})
		}	
	}

	const logIn = async data =>{
		try{
			const response = await Axios.post('/api/auth', data);
			localStorage.setItem('token', response.data.token);
			await getUserAuth();
		}catch(error){
			dispatch({
				type: FAIL_AUTHENTICATE,
				payload: error.response.data.msg
			})
		}
	}

	const logOut = async =>{
		dispatch({
				type: LOG_OUT,
				payload: 'Sesion cerrada'
		})
	}

  return (
    <authContext.Provider
    	value={{
    		authenticate: state.authenticate,
    		user: state.user,
    		regUser,
    		logIn,
    		getUserAuth,
    		logOut
    		}}
    	>
    	{props.children}
    </authContext.Provider>
  )
}

export default AuthState;