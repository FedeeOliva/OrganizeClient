import React, {useState, useContext} from 'react'; 
import BoardContext from '../../context/board/boardContext';
import { v4 as uuidv4 } from 'uuid';
import {NavTools, ToolsContainer, Form} from './style';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

const Tools = (props) => {

	const [addingNewList, setAddingNewList] = useState(false);
	const [listName , setListName] = useState('');

	const {createList, deleteBoard} = useContext(BoardContext);
	const history = useHistory();

	const handleChangeName = e =>{
		setListName(e.target.value);
	}

	const handleBlurName = e =>{
		setAddingNewList(false);
		setListName('');		
	}

	const handleDeleteBoard = async _ =>{
		const res = await swal({
            title: "Eliminar tablero",
            text: "¿Estas seguro de eliminar el tablero?",
            icon: "warning",
            buttons: ["Cancelar", "Eliminar"]
        })
        if(res){
        	await deleteBoard();
        	await swal({
        		text: "Tablero ha sido eliminado",
        		icon: "success"
        	})		
			history.push('/user');   
        }      	
       
	}

	const handleSubmit = e =>{
		e.preventDefault();
		if(listName.trim() === '') return;

		createList({
			name: listName,			
			_id : uuidv4(),
			tasks : [],
		});
		setAddingNewList(false);
		setListName('');
	}

	
  return (
    <NavTools>
    	<ToolsContainer>
    		{addingNewList?
    			<Form onSubmit={handleSubmit}>
    				<button 
    					type="button"
    					onClick = { () => setAddingNewList(false)}
    					>
    						<i className="far fa-times-circle"></i>
    					</button>
    				<input 
    					type="text"
    					placeholder="Nombre de la lista"
    					value={listName}
    					onChange = {handleChangeName}
    					onBlur = {handleBlurName}
    					autoFocus
    				/>
    			</Form>
    		:
	    	<button
	    		onClick={() => setAddingNewList(true)}
	    		>
	    		+ Agregar Lista
	    	</button>
	    	}
	    	<button
	    		onClick = {handleDeleteBoard}
	    		>
	    		x Eliminar Tablero
	    	</button>
    	</ToolsContainer>
    </NavTools>
  )
}

export default Tools;