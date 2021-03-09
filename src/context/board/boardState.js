import React, {useReducer} from 'react';
import boardContext from './boardContext';
import boardReducer from './boardReducer';
import Axios from '../../config/Axios';

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
	CREATE_LIST,
	CREATE_LIST_SUCCESS,
	CREATE_LIST_ERROR, 
	DELETE_LIST, 
	CREATE_TASK,
	DELETE_TASK, 
	UPDATE_LIST, 
	LOG_OUT_BOARD} from '../types';

const BoardState = props => {

	const initialState = {	
		boards: [],
		board: {
			lists: []
		},
		error: false,
		isLoading: false,
	}

	const [state, dispatch] = useReducer(boardReducer, initialState);

	const getBoard = async id =>{
		dispatch({type: GET_BOARD})
		try{
			const response = await Axios.get(`/api/boards/${id}`);
			dispatch({
				type: GET_BOARD_SUCCESS,
				payload: response.data.board
			});
		}catch(error){
			console.log(error);
			dispatch({
				type: GET_BOARD_ERROR,
				payload: 'Hubo un problema al buscar el tablero'
			})		
		}
	}
	
	const getBoards = async () =>{
		dispatch({type: GET_BOARDS})
		try{
			const response = await Axios.get(`/api/boards`);
			dispatch({
				type: GET_BOARDS_SUCCESS,
				payload: response.data.boards
			});
		}catch(error){
			console.log(error);
			dispatch({
				type: GET_BOARDS_ERROR,
				payload: 'Hubo un problema al encontrar los tableros'
			})	
		}
	}

	const createBoard = async data =>{
		dispatch({type: CREATE_BOARD})
		try{
			const response = await Axios.post('/api/boards', data);
			dispatch({
				type: CREATE_BOARD_SUCCESS,
				payload: response.data.board
			});
		}catch(error){
			console.log(error.msg);
			dispatch({
				type: CREATE_BOARD_ERROR,
				payload: 'Error al crear el tablero'
			})
		}
	}

	const deleteBoard = async () => {
		dispatch({type: DELETE_BOARD});
		try{
			await Axios.delete(`/api/boards/${state.board._id}`);
			dispatch({
				type: DELETE_BOARD_SUCCESS
			})

		}catch(error){
			dispatch({
				type: DELETE_BOARD_ERROR,
				payload: 'Error al eliminar el tablero'
			})

		}
		return true;
	}


	/*----- Listas------*/
	const createList = async list =>{
		dispatch({type: CREATE_LIST});
		try{
			const response = await Axios.post(`/api/lists?idBoard=${state.board._id}`, list);			
			
			dispatch({
				type: CREATE_LIST_SUCCESS,
				payload: response.data.list
			})
		}catch(error){
			console.log(error.msg);
			dispatch({
				type: CREATE_LIST_ERROR,
				payload: 'No se pudo crear la lista'
			})
		}
	}

	const deleteList = id => {
		try{
			const url  = `/api/lists/${id}`
			Axios.delete(url);
			dispatch({
				type: DELETE_LIST,
				payload: id				
			})
		}catch(error){
			console.log(error.msg)
		}
	}

	const updateList = list => {
			const url = `/api/lists`;	
			dispatch({
				type: UPDATE_LIST,
				payload: list
			});
		try{
			Axios.put(url, {list});
			
		}catch(error){
			console.log(error.msg);
		}
	}


	/*-----Tareas------*/
	const createTask = (idList, task) =>{
		dispatch({
				type: CREATE_TASK,
				payload: {idList, task}
			})
		try{
			Axios.post(`/api/tasks?
				idBoard=${state.board._id}&
				idList=${idList}
				`, task)
			
		}catch(error){
			console.log(error.msg);
		}
	}

	const deleteTask = (idList, idTask) =>{
		const list = state.board.lists.find(list => list._id ===  idList);
		const tasks = list.tasks.filter( task => task._id !== idTask);
		const lists = state.board.lists.map( list => {
			if(list._id === idList){
				list.tasks = tasks
			}
			return list;
		})
		dispatch({
			type: DELETE_TASK,
			payload: lists
		});
		try{
			Axios.put(`/api/lists?idBoard=${state.board._id}`, {list});
		}catch(error){
			console.log(error.msg);
		}
	}

	const updateTask = (idList, idTask, text) => {
		const list = state.board.lists.find( list => list._id === idList);
		list.tasks.map( task => {
			if(task._id === idTask){
				task.name = text
			}				
			return task;	
		})
		dispatch({
				type: UPDATE_LIST,
				payload: list
		});
		const url = `/api/lists?idBoard=${state.board._id}`;
		try{
			Axios.put(url, {list});
			
		}catch(error){
			console.log(error.msg);
		}
	}

	//D&D
	const updateTasksInList = (idList, tasks) =>{
		let list = state.board.lists.find( list => list._id === idList);
		list.tasks = tasks;
		dispatch({
				type: UPDATE_LIST,
				payload: list
		});
		const url = `/api/lists?idBoard=${state.board._id}`;
		try{
			Axios.put(url, {list});
			
		}catch(error){
			console.log(error.msg);
		}
	}

	/*Pone los tableros en null para que al inicar otra sesion
	no se muestren los tableros del usuario anterior*/
	const logOutBoard = () => {
		dispatch({
			type: LOG_OUT_BOARD
		})
	}	

  return (
    <boardContext.Provider
    	value={{
    			boards: state.boards,
    			board: state.board,
    			error: state.error,
    			isLoading: state.isLoading,
    			getBoard,
    			getBoards,
    			createBoard,
    			deleteBoard,
    			createList,
    			deleteList,
    			createTask,
    			deleteTask,
    			updateList,
    			updateTask,
    			updateTasksInList,
    			logOutBoard
    		}}
    	>
    	{props.children}
    </boardContext.Provider>
  )
}

export default BoardState;