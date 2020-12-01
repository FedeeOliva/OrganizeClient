import React, {useReducer} from 'react';
import boardContext from './boardContext';
import boardReducer from './boardReducer';
import Axios from '../../config/Axios';
import {GET_BOARD, GET_BOARDS, CREATE_BOARD} from '../types';

const BoardState = props => {

	const initialState = {	
		boards: [],
		board: {}
	}

	const [state, dispatch] = useReducer(boardReducer, initialState);

	const getBoard = async id =>{
		try{
			const response = await Axios.get(`/api/boards/${id}`);
			dispatch({
				type: GET_BOARD,
				payload: response.data.board
			});
		}catch(error){
			console.log(error.msg);
		}
	}
	
	const getBoards = async () =>{
		try{
			const response = await Axios.get('/api/boards');
			dispatch({
				type: GET_BOARDS,
				payload: response.data.boards
			});
		}catch(error){
			console.log(error.msg);
		}
	}

	const createBoard = async data =>{
		try{
			const response = await Axios.post('/api/boards', data);
			console.log(response);
			dispatch({
				type: CREATE_BOARD,
				payload: response.data.board
			});
		}catch(error){
			console.log(error.msg);
		}
	}

  return (
    <boardContext.Provider
    	value={{
    			boards: state.boards,
    			board: state.board,
    			getBoard,
    			getBoards,
    			createBoard
    		}}
    	>
    	{props.children}
    </boardContext.Provider>
  )
}

export default BoardState;