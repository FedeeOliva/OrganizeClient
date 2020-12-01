import React, {useRef, useEffect} from 'react';
import {Images} from './style';
import useImages from '../../hooks/useImages';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const ListImages = ({keyword,imageSelected, setImageSelected}) => {	

	const [images, setPage] = useImages(keyword);
	const visor = useRef();
	const rootElement = useRef();

	const options = {
		root: rootElement.current,
		rootMargin: '100px',		
	}
	const[isNearScreen] = useInfiniteScroll(options,visor);

	useEffect( () =>{
		if(isNearScreen){
			setPage( prev => prev+1);
		}
	} ,[isNearScreen]);

	const handleImageSelect = id =>{
		setImageSelected(id);
	}
	const styleImageSelected = {
		border: '3px solid grey',
		opacity: '0.6'
	}

  return (
  	<>
	    <Images ref={rootElement}>
	    	{images.map( image => 
	    		<img
	    			key={image.id} 
	    			src={image.previewURL} 
	    			alt={image.tags}
	    			onClick={() => handleImageSelect(image)}
	    			style={image.id === imageSelected.id? styleImageSelected :null }
	    			/>
	    		)}
	    	<div ref={visor}></div>  
	    </Images>
	    
    </>	
  )
}

export default ListImages;