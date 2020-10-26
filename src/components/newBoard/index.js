import React, {useState, useCallback} from 'react';
import {Title,Form , Input, Subtitle, Submit} from './style';
import ListImages from '../listImages';
import debounce from 'lodash/debounce';

const NewBoard = (props) => {

	const [name, setName] = useState('');
	const [search, setSearch] = useState('');
	const [keyword, saveKeyword] = useState('');


    
    const debounceSaveKeyword = useCallback(
        debounce( nextValue => saveKeyword(nextValue) ,700)
      ,[]);

    /*Se podria agregar algun spinner o algo que avise que se esta buscando
    cuando se ejecute debounce que cambie a false el loading*/
    const handleSearch = e =>{
        setSearch(e.target.value)
        debounceSaveKeyword(e.target.value);
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
    			value={search}
    			onChange={handleSearch}
    			placeholder="Buscar imagen"
    		/>
    		<Subtitle>Imagenes:</Subtitle>
    		<div>
    			<ListImages
    				keyword={keyword}
    			/>
    		</div>
    		<Submit type="submit">Crear</Submit>
    	</Form>
    	
    
  )
}

export default NewBoard;