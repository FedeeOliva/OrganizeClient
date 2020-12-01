import React from 'react'; 
import {NavTools, ToolsContainer} from './style';

const Tools = (props) => {
  return (
    <NavTools>
    	<ToolsContainer>
	    	<button>
	    		+ Agregar Lista
	    	</button>
	    	<button>
	    		x Eliminar Tablero
	    	</button>
    	</ToolsContainer>
    </NavTools>
  )
}

export default Tools;