import React, {useState,useRef} from 'react';
import {Title,Form , Input, Subtitle, Submit} from './style';
import ListImages from '../listImages';
import throttle from 'lodash';

const NewBoard = (props) => {

	const [name, setName] = useState('');
	const [search, setSearch] = useState('');
	const inputSearch = useRef(null);
	/*const [search, setSearch] = useState({searching: '', keyword: ''});
	const {searching, keyword} = search;

	const handleSearchThrottle = () => {
		setSearch({search, keyword: searching})
	}
	const handleSearch = e => {
		setSearch({...search, searching: e.target.value})
		console.log(typeof throttle);
		throttle(handleSearchThrottle, 1000);
	}*/
	//use ref al input, throttle en el handle change, y que reciba el
	//valor desde la ref

	const handleSearch = () =>{
		setTimeout( () =>{
			setSearch(inputSearch.current.value);
		} ,1000)
		
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