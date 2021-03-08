import {
	GET_BOARDS,
	GET_BOARDS_SUCCESS,
	GET_BOARDS_ERROR,
	GET_BOARD,
	GET_BOARD_SUCCESS,
	GET_BOARD_ERROR,
	CREATE_BOARD,
	CREATE_BOARD_SUCCESS,
	CREATE_BOARD_ERROR,
	DELETE_BOARD,
	DELETE_BOARD_SUCCESS,
	DELETE_BOARD_ERROR,
	UPDATE_BOARD,
	CREATE_LIST, 
	DELETE_LIST,
	CREATE_TASK,
	UPDATE_LIST,
	DELETE_TASK,
	LOG_OUT_BOARD} from '../types';

export default (state, action) => {
	switch(action.type){
		case GET_BOARD:
		case GET_BOARDS:
		case CREATE_BOARD:
		case DELETE_BOARD:
		case UPDATE_BOARD:
			return{
				...state,
				isLoading: true,
				error: false,
			}
		case GET_BOARD_ERROR:
		case GET_BOARDS_ERROR:
		case CREATE_BOARD_ERROR:
		case DELETE_BOARD_ERROR:
			return{
				...state,
				isLoading: false,
				error: action.payload
			}
		case GET_BOARD_SUCCESS:
			return{
				...state,
				board: action.payload,
				isLoading: false,
				error: false
			}
		case GET_BOARDS_SUCCESS:
			return {
				...state,
				boards: action.payload,
				board: {
					lists: []
				},
				isLoading: false,
				error: false
			}
		case CREATE_BOARD_SUCCESS:
			return{
				...state,
				boards: [...state.boards, action.payload],
				isLoading: false,
			}
		case DELETE_BOARD_SUCCESS:
			 return{
			 	...state,
			 	board: {
			 		lists: []
			 	},
			 	isLoading: false,
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
					lists: state.board.lists.filter(list => 
						list._id !== action.payload)
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
		case LOG_OUT_BOARD:
			return{
				...state,
				boards: [],
				board: {
					lists: []
				}
			}
		default:
			return state;
	}
}