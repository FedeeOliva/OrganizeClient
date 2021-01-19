import React, {useReducer} from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import Axios from '../../config/Axios';
import tokenAuth from '../../config/tokenAuth';
import {FAIL_AUTHENTICATE,
		GET_USER,
		GET_USER_SUCCESS,
		GET_USER_FAIL, 
		LOG_OUT,
		SHOW_ALERT_ERROR
	} from '../types';


const AuthState = props => {

	const initialState = {
		authenticate: false,
		user: null,
		loading: true,
		error: false,
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
		dispatch({
			type: GET_USER
		});
		try{
			const token = await localStorage.getItem('token');		
			await tokenAuth(token);			
			const response = await Axios.get('/api/auth');
			dispatch({
				type: GET_USER_SUCCESS,
				payload: response.data.user
			});
		}catch(error){
			dispatch({
				type: GET_USER_FAIL,
				payload: error.response.data.msg
			})
		}	
	}



	const logIn = async data =>{
		try{
			const response = await Axios.post('/api/auth', data);
			await localStorage.setItem('token', response.data.token);
			await getUserAuth();
		}catch(error){
			dispatch({
				type: FAIL_AUTHENTICATE,
				payload: error.response.data.msg
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

	const showAlertError = msg => {
		dispatch({
			type: SHOW_ALERT_ERROR,
			payload: msg
		})
	}

  return (
    <authContext.Provider
    	value={{
    		authenticate: state.authenticate,
    		user: state.user,
    		loading: state.loading,
    		msg: state.msg,
    		error: state.error,
    		regUser,
    		logIn,
    		getUserAuth,
    		logOut,
    		showAlertError
    		}}
    	>
    	{props.children}
    </authContext.Provider>
  )
}

export default AuthState;