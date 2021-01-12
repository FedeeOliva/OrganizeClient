import React, {useState, useContext, useRef} from 'react';
import BoardContext from '../../context/board/boardContext';
import {Task, SpanTextTask, BtnEdit, TextArea, PopoverEdit} from './style';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const TaskComponent = ({text, idList, idTask}) => {

    const {deleteTask, updateTask} = useContext(BoardContext);
	const[textTask, setTextTask] = useState(text);
	const[editTask, setEditTask] = useState(false);
	const btnSubmitForm = useRef(null);

	const handleKeyPress = e => {
        if(e.which === 13 && !e.shiftKey){
          btnSubmitForm.current.click();
          e.preventDefault();
        }
    }

    const handleOnBlur = e =>{
    	setTextTask(text);
    	setEditTask(false);
    }

    const handleEditTask = e => {
    	e.preventDefault();
    	updateTask(idList, idTask, textTask);
        setEditTask(false);
    }

    

  return (
    <Task id={idTask}>
    	{editTask?
    		<form
    			onSubmit = {handleEditTask}
    			>
    			<TextArea 
    				onChange={ e => setTextTask(e.target.value)}
    				value={textTask}
    				onKeyPress={handleKeyPress}
    				onBlur = {handleOnBlur}
    				autoFocus
    				></TextArea>
    			<button
                    ref={btnSubmitForm}
                    style={{display: 'none'}}
                    >
                    submit
                </button>
    		</form>
    	:
    	<>
    		<OverlayTrigger trigger="click" placement="right" overlay={
    			<PopoverEdit>
    				<button
    					onClick = {() => setEditTask(true)}
    					>Editar</button>
    				<button
                        onClick = {() => deleteTask(idList,idTask)}
                        >Eliminar</button>
    			</PopoverEdit>
    			}>
		    	<BtnEdit>
		    		<i className="fas fa-pencil-alt"></i>
		    	</BtnEdit>
	    	</OverlayTrigger>
	    	<SpanTextTask>
	    		{textTask}
	    	</SpanTextTask>
    	
    	</>
    	}
    </Task>
  )
}

export default TaskComponent;