import React, {useReducer} from 'react';
import boardContext from './boardContext';
import boardReducer from './boardReducer';
import Axios from '../../config/Axios';

import {GET_BOARD, GET_BOARDS, 
	CREATE_BOARD, DELETE_BOARD,
	CREATE_LIST, DELETE_LIST, CREATE_TASK,
	DELETE_TASK, UPDATE_LIST, THEREIS_ERROR,
	LOG_OUT_BOARD} from '../types';

const BoardState = props => {

	const initialState = {	
		boards: [],
		board: {
			lists: []
		},
		error: false
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
			dispatch({
				type: THEREIS_ERROR
			})		
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
			dispatch({
				type: CREATE_BOARD,
				payload: response.data.board
			});
		}catch(error){
			console.log(error.msg);
		}
	}

	const deleteBoard = async () => {
		await Axios.delete(`/api/boards/${state.board._id}`);
		dispatch({
			type: DELETE_BOARD
		})
		return true;
	}


	/*----- Listas------*/
	const createList = async list =>{
		dispatch({
				type: CREATE_LIST,
				payload: list
		});
		try{
			await Axios.post(`/api/lists?idBoard=${state.board._id}`, list);			
		}catch(error){
			console.log(error.msg);
		}
	}

	const deleteList = id => {
		try{
			const url  = `/api/lists?idBoard=${state.board._id}&idList=${id}`
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
			const url = `/api/lists?idBoard=${state.board._id}`;	
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