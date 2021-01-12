import {GET_BOARD, GET_BOARDS, CREATE_BOARD,
		DELETE_BOARD, UPDATE_BOARD, CREATE_LIST, 
		DELETE_LIST,CREATE_TASK, UPDATE_LIST, DELETE_TASK,
		THEREIS_ERROR} from '../types';

export default (state, action) => {
	switch(action.type){
		case UPDATE_BOARD:
		case GET_BOARD:
			return{
				...state,
				board: action.payload,
				error: false
			}
		case GET_BOARDS:
			return {
				...state,
				boards: action.payload,
				board: {
					lists: []
				},
				error: false
			}
		case CREATE_BOARD:
			return{
				...state,
				boards: [...state.boards, action.payload]
			}
		case DELETE_BOARD:
			 return{
			 	...state,
			 	board: {
			 		lists: []
			 	}
			 }
		case CREATE_LIST:
			return{
				...state,
				board: {...state.board, lists: [...state.board.lists,action.payload ] }

			}
		case DELETE_LIST:
			return{
				...state,
				board: {...state.board,
					lists: state.board.lists.filter(list => list._id !== action.payload)
				}
			}
		case UPDATE_LIST:
		 	return{
		 		...state,
		 		board:{
		 			...state.board,
		 			lists: state.board.lists.map( list => 
		 			list._id === action.payload._id ?
		 				action.payload
		 			: 
		 				list
		 			)
		 		}
		 	}
		case CREATE_TASK:			
			state.board.lists.find(list => list._id === action.payload.idList)
			.tasks.push(action.payload.task);
			return state;

		case DELETE_TASK:
			return{
				...state,
				board: {...state.board,
					lists: action.payload
				}
			}

		case THEREIS_ERROR:
			return{
				...state,
				error: true
			}
		default:
			return state;
	}
}