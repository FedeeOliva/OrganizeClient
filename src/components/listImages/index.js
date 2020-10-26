import React, {useState, useEffect} from 'react';
import {Images} from './style';

const ListImages = ({keyword}) => {

	const [images, setImages] = useState([]);
	const urlBase = 'https://pixabay.com/api/?';
	const apiKey = '17758117-18215cb7c2e384f06943fcff0';

	useEffect( () =>{
		const fetchImages = async () =>{
			try{
				const res = await fetch(`${urlBase}key=${apiKey}&q=${keyword}`);
				const imagesResponse = await res.json();
				console.log(imagesResponse);
				setImages(imagesResponse.hits);				
			}catch(error){
				console.log(error);
			}
		}
		fetchImages();			
		//agregar go top al buscar e infinite scroll
	}, [keyword]);

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