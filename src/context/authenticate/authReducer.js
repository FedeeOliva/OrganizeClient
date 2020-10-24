import {GET_USER, FAIL_AUTHENTICATE,
	LOG_OUT} from '../types';

export default (state, action) => {
	switch(action.type){
		case LOG_OUT:
		case FAIL_AUTHENTICATE:
			localStorage.removeItem('token');
			return{
				...state,
				authenticate: false,
				user: null,
				msg: action.payload
			}
		case GET_USER:
			return{
				...state,
				authenticate: true,
				user: action.payload
			}
		default:
			return state;
	}
}