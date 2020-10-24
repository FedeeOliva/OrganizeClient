import React, {useState,useRef, useCallback} from 'react';
import {Title,Form , Input, Subtitle, Submit} from './style';
import ListImages from '../listImages';
import debounce from 'lodash/debounce';

const NewBoard = (props) => {

	const [name, setName] = useState('');
	const [search, setSearch] = useState('');
	const inputSearch = useRef(null);


    //Se podria agregar algun spinner o algo que avise que se esta buscando
    const throttledHandleSearch = useCallback(
        debounce( nextValue => setSearch(nextValue) ,700)
      ,[]);

    /*Si quisiera tener controlado el input de busqueda deberia crear
    otro estado que use la funcion debounce, y ese estado pasar a ListImages
    y en handleSearch actualizar ambos estados*/
    const handleSearch = () =>{
        throttledHandleSearch(inputSearch.current.value);
    }


  return (
        	
    	<Form> 
    		<Title>Crear un tablero</Title>
    		<Input 
    			type="text"
    			name="name"
    			value={name} 
    			onChange={ e => setName(e.target.value)}
    			placeholder="Título del tablero"
    		/>
    		<Input 
    			type="text"
    			name="search"
    			ref={inputSearch}
    			onChange={handleSearch}
    			placeholder="Buscar imagen"
    		/>
    		<Subtitle>Imagenes:</Subtitle>
    		<div>
    			<ListImages
    				search={search}
    			/>
    		</div>
    		<Submit type="submit">Crear</Submit>
    	</Form>
    	
    
  )
}

export default NewBoard;