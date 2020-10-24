import React, {useReducer} from 'react';
import boardContext from './boardContext';
import boardReducer from './boardReducer';
import Axios from '../../config/Axios';
import tokenAuth from '../../config/tokenAuth';
import {GET_BOARDS, CREATE_BOARD} from '../types';

const BoardState = props => {

	const initialState = {
		boards: []
	}

	const [state, dispatch] = useReducer(boardReducer, initialState);

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
    			getBoards,
    			createBoard
    		}}
    	>
    	{props.children}
    </boardContext.Provider>
  )
}

export default BoardState;