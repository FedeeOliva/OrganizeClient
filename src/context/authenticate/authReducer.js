import {
	GET_USER, 
	GET_USER_SUCCESS,
	GET_USER_FAIL,
	FAIL_AUTHENTICATE,
	LOG_OUT,
	SHOW_ALERT_ERROR
	} from '../types';

export default (state, action) => {
	switch(action.type){
		case FAIL_AUTHENTICATE:
		case LOG_OUT:
			return{
				...state,
				authenticate: false,
				user: null,
				error: true,
				msg: action.payload,
			}
		case GET_USER:
			return{
				...state,
				loading: true,
			}
		case GET_USER_SUCCESS:
			return{
				...state,
				loading: false,
				authenticate: true,
				user: action.payload,
				msg: null,
				error: false,
			}
		case GET_USER_FAIL:
			return{
				...state,
				authenticate: false,
				user: null,
				loading: false
			}
		case SHOW_ALERT_ERROR:
			return{
				...state,
				error: true,
				msg: action.payload
			}
		default:
			return state;
	}
}