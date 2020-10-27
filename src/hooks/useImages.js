import React,{useState, useEffect} from 'react';

// https://github.com/midudev/react-live-coding/blob/master/src/hooks/useGifs.js
// https://github.com/midudev/react-live-coding/blob/master/src/services/getGifs.js
// https://github.com/midudev/react-live-coding/blob/master/src/pages/SearchResults/index.js

const urlBase = 'https://pixabay.com/api/?';
const apiKey = '17758117-18215cb7c2e384f06943fcff0';
const INITIAL_PAGE = 1;

const useImages = (keyword) => {
	const [images, setImages] = useState([]);
	const [page, setPage] = useState(1);

	const fetchImages = async (keyword = '', page = 1) =>{
		try{
			const res = await fetch(`${urlBase}key=${apiKey}&q=${keyword}
				&category=backgrounds&page=${page}`);
			const imagesResponse = await res.json();
			setImages(imagesResponse.hits);				
		}catch(error){
			console.log(error);
		}
	}

	/*useEffect( () =>{
		fetchImages(keyword, page);

	}, [keyword]);*/

	return [images]	
}

export default useImages;