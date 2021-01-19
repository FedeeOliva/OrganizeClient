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
				payload: error.msg
			})
		}		
	}

	const getUserAuth = async () =>{
		try{
			const token = await localStorage.getItem('token');		
			await tokenAuth(token);			
			const response = await Axios.get('/api/auth');
			dispatch({
				type: GET_USER,
				payload: response.data.user
			});
		}catch(error){
			dispatch({
				type: FAIL_AUTHENTICATE,
				payload: error.msg
			})
		}	
	}

	/*
	Funcion similar a getUserAuth sin el dispatch
	const isAuth = async () =>{
	
	}
	*/

	const logIn = async data =>{
		try{
			const response = await Axios.post('/api/auth', data);
			await localStorage.setItem('token', response.data.token);
			await getUserAuth();
		}catch(error){
			console.log(error.msg);
			dispatch({
				type: FAIL_AUTHENTICATE,
				payload: error.msg
			})
		}
	}

	const logOut = async () =>{
		await localStorage.removeItem('token');
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