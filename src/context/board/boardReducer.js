import {GET_BOARDS, CREATE_BOARD} from '../types';

export default (state, action) => {
	switch(action.type){
		case GET_BOARDS:
			return {
				...state,
				boards: action.payload
			}
		case CREATE_BOARD:
			return{
				...state,
				boards: [...state.boards, action.payload]
			}
		default:
			return state;
	}
}