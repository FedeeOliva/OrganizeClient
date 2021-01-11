import React, {useState, useCallback, useContext} from 'react';
import BoardContext from '../../context/board/boardContext';
import {Title,Form , Input, Subtitle, Submit} from './style';
import ListImages from '../listImages';
import debounce from 'lodash/debounce';

const NewBoard = ({setShow}) => {

	const [name, setName] = useState('');
	const [search, setSearch] = useState('');
	const [keyword, saveKeyword] = useState('');
    const [imageSelected, setImageSelected] = useState('');
    const {createBoard} = useContext(BoardContext);

    const debounceSaveKeyword = useCallback(
        debounce( nextValue => saveKeyword(nextValue) ,700)
      ,[]);

    const handleSearch = e =>{
        setSearch(e.target.value)
        debounceSaveKeyword(e.target.value);
    }    

    const handleSubmit = e =>{
        e.preventDefault();
        if(name.trim() === ''){
            console.log('Alerta no eligio nombre');
            return;
        }
        if(imageSelected === ''){
            console.log('No seleccionó imagen');
            return;
        }
        setShow(false);
        createBoard({
            name: name,
            imageID: imageSelected.id

        });
    }

  return (        	
    	<Form onSubmit={handleSubmit}> 
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
                    imageSelected={imageSelected}
                    setImageSelected={setImageSelected}
    			/>
    		</div>
    		<Submit type="submit">Crear</Submit>
    	</Form>
  )
}

export default NewBoard;