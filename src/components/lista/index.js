import React from 'react';
import {List,Wrapper, ListHeader, BtnAddTask} from './style';
import Task from '../task';
const ListaComponent = (props) => {
	const texto = "Nada mejor que programar sin pensar ennn nada mas, bueno saluden Nada mejor que programar sin pensar en nada mas, bueno saluden"
  return (
    <Wrapper>
         <List>

        	<ListHeader>
        		<h6>To Do</h6>
        		<button>
        			<i class="fas fa-ellipsis-h"></i>
        		</button>    		
        	</ListHeader>    	
        	<ul>
        		<Task
        			text={texto }
        		/>    			
        		<Task
        			text={"Limpiar"}
        		/>
                <Task
                    text={"Limpiar"}
                />

                <Task
                    text={"Limpiar"}
                />
                <Task
                    text={texto }
                />              
                <Task
                    text={"Limpiar"}
                />
                <Task
                    text={"Limpiar"}
                />

                <Task
                    text={"Limpiar"}
                />

            </ul>
        	<BtnAddTask>
        		+ Agregar Tarea
        	</BtnAddTask>
       
        </List>
    </Wrapper>
  )
}

export default ListaComponent;