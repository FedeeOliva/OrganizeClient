import React, {useState, useEffect} from 'react';
import {Images} from './style';

const ListImages = ({search}) => {

	const [images, setImages] = useState([]);
	const urlBase = 'https://pixabay.com/api/?';
	const apiKey = '17758117-18215cb7c2e384f06943fcff0';

	useEffect( () =>{
		const fetchImages = async () =>{
			try{
				const res = await fetch(`${urlBase}key=${apiKey}&q=${search}`);
				const imagesResponse = await res.json();
				console.log(imagesResponse);
				setImages(imagesResponse.hits);				
			}catch(error){
				console.log(error);
			}
		}
		//if(search.length > 3) 
		fetchImages();				
		
	}, [search]);

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