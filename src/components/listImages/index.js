import React, {useRef, useEffect} from 'react';
import {Images} from './style';
import useImages from '../../hooks/useImages';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const ListImages = ({keyword}) => {

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
			console.log('intercepto');
			setPage( prev => prev+1);
		}
	} ,[isNearScreen]);

  return (
  	<>
	    <Images ref={rootElement}>
	    	{images.map( image => 
	    		<img
	    			key={image.id} 
	    			src={image.previewURL} 
	    			alt={image.tags}/>
	    		)}
	    	<div ref={visor}></div>  
	    </Images>
	    
    </>	
  )
}

export default ListImages;