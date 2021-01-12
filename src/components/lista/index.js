import React, {useState,useEffect, useContext, useRef} from 'react';
import BoardContext from '../../context/board/boardContext';
import {List,Wrapper, ListHeader, 
    BtnAddTask, Input, TextArea, BtnDelete} from './style';
import Task from '../task';
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';
import Sortable from 'sortablejs';

const ListaComponent = ({list}) => {
    const {createTask, deleteList, updateList} = useContext(BoardContext);
    const btnSubmitForm = useRef(null);
    const listaDD = useRef(null);
    const {tasks} = list; // dsp pasarlo listLocal.tasks

    const [listLocal, setListLocal ] = useState(list);
    const [taskText, setTaskText] = useState('');
    const [showAddTask, setShowAddTask] = useState(false);
    const [localTasks, setLocalTasks] = useState(listLocal.tasks);

    useEffect(()=>{
        setListLocal(list);
    },[list]);

    useEffect(()=>{
        if(listaDD.current){
            Sortable.create(listaDD.current,{
                group: "board",
                onEnd: function(e){
                    console.log(e.item.id);
                    console.log(listaDD.current);
                }
            });
        }
    },[listaDD.current]);

    const handleBlurChangeName = _ =>{
        setListLocal(list)
    }
    const onChangeName = e => {
        setListLocal({
            ...listLocal,
            name: e.target.value
        })
    }

    const handleBlurAddTask = _ =>{
        setShowAddTask(false);
        setTaskText('');
    }   

    const handleEnterPress = e => {
        if(e.which === 13 && !e.shiftKey){
          btnSubmitForm.current.click();
          e.preventDefault();
        }
    }

    const handleNewTaskSubmit = e => {
        e.preventDefault();
        if(taskText.trim() === '') return;      
        createTask(list._id, {
            name: taskText,
            _id: uuidv4()
        });
        setTaskText('');
    }

    const handleDeleteList = e => {
        swal({
            title: "Eliminar lista",
            text: "¿Estas seguro de eliminar la lista?",
            icon: "warning",
            buttons: ["Cancelar", "Eliminar"]
        }).then( res => {
            if(res){
               deleteList(list._id);
                swal({
                    title: "Se ha eliminando la lista",
                    icon: "success"
                })
            } 
        })
    }

    const onSubmitEditList = e =>{
        e.preventDefault();
        updateList(listLocal);
        e.target.name.blur();
    }

    


  return (
    <Wrapper>
         <List>
        	<ListHeader>
                <form
                    onSubmit = {onSubmitEditList}
                    >
                    <Input type="text" 
                        value={listLocal.name} 
                        name="name"
                        onChange={onChangeName}
                        onBlur = {handleBlurChangeName} 
                        />
                    <button
                        type="submit"
                        style={{display: "none"}}
                    ></button>
                </form>        		
        		<BtnDelete
                    onClick = {handleDeleteList}
                    >
        			<i className="far fa-times-circle"></i>
        		</BtnDelete>    		
        	</ListHeader>    	
        	<ul ref={listaDD}>
        		{localTasks && localTasks.map( task => 
                    <Task
                        key={task._id}
                        text={task.name}
                        idList = {list._id}
                        idTask = {task._id}
                        />
                    )}

                {showAddTask &&
                    <form
                        onSubmit={handleNewTaskSubmit}
                        >
                        <TextArea
                            placeholder = "Introduzca la nueva tarea"
                            value = {taskText}
                            onChange={ e => setTaskText(e.target.value)}
                            onBlur={handleBlurAddTask}
                            onKeyPress={handleEnterPress}
                            autoFocus
                            />
                        <button
                            ref={btnSubmitForm}
                            style={{display: 'none'}}
                            >
                            submit
                        </button>
                    </form>
                }
            </ul>
        	<BtnAddTask 
                onClick={ () => setShowAddTask(true)}
                >
        		+ Agregar Tarea
        	</BtnAddTask>
       
        </List>
    </Wrapper>
  )
}

export default ListaComponent;