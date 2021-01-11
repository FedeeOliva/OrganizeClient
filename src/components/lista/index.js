import React, {useState, useContext, useRef} from 'react';
import BoardContext from '../../context/board/boardContext';
import {List,Wrapper, ListHeader, 
    BtnAddTask, Input, TextArea, BtnDelete} from './style';
import Task from '../task';
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';

const ListaComponent = ({list}) => {
    const {createTask, deleteList} = useContext(BoardContext);
    const btnSubmitForm = useRef(null);
    const {tasks} = list;

    const [name, setName] = useState(list.name);
    const [taskText, setTaskText] = useState('');
    const [showAddTask, setShowAddTask] = useState(false);

    const handleBlurChangeName = _ =>{
        console.log('blur');
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

  return (
    <Wrapper>
         <List>
        	<ListHeader>
                <form>
                    <Input type="text" 
                        value={name} 
                        name="name"
                        onChange={e => setName(e.target.value)}
                        onBlur = {handleBlurChangeName} 
                        />
                </form>        		
        		<BtnDelete
                    onClick = {handleDeleteList}
                    >
        			<i className="far fa-times-circle"></i>
        		</BtnDelete>    		
        	</ListHeader>    	
        	<ul>
        		{tasks && tasks.map( task => 
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