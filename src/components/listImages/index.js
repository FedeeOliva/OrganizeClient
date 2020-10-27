import React from 'react';
import {Images} from './style';
import useImages from '../../hooks/useImages';

const ListImages = ({keyword}) => {

	const [images] = useImages(keyword);



  return (
    <Images>
    	{images.map( image => 
    		<img
    			key={image.id} 
    			src={image.previewURL} 
    			alt={image.tags}/>
    		)}    	
    </Images>
  )
}

export default ListImages;