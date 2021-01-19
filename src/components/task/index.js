import React, {useState, useContext, useRef} from 'react';
import BoardContext from '../../context/board/boardContext';
import {Task, SpanTextTask,TextArea,BtnOption, OptionsButtons} from './style';

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
        setEditTask(false);
    	updateTask(idList, idTask, textTask);        
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
                    className="ignore-drag"
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
            <OptionsButtons className="buttons">
    		    <BtnOption
                    onClick={() => setEditTask(true)}
                    >
    		    	<i className="fas fa-pencil-alt"></i>
    		    </BtnOption>
                <BtnOption
                    onClick={() => deleteTask(idList, idTask)}
                    >
                    <i className="far fa-times-circle"></i>
                </BtnOption>	
            </OptionsButtons> 		
	    	<SpanTextTask>
	    		{textTask}
	    	</SpanTextTask>
    	
    	</>
    	}
    </Task>
  )
}

export default TaskComponent;