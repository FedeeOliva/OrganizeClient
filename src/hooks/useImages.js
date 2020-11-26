import {useState, useEffect} from 'react';

const urlBase = 'https://pixabay.com/api/?';
const apiKey = '17758117-18215cb7c2e384f06943fcff0';

const useImages = (keyword) => {
	const [images, setImages] = useState([]);
	const [page, setPage] = useState(1);

	const fetchImages = async (keyword = '', page = 1) =>{
		try{
			const res = await fetch(`${urlBase}key=${apiKey}&q=${keyword}
				&category=backgrounds&page=${page}`);
			const imagesResponse = await res.json();
			return imagesResponse.hits;				
		}catch(error){
			console.log(error);
		}
	}

	useEffect( () =>{
		fetchImages(keyword)
		.then(imgs => setImages(imgs));
		setPage(1);
	}, [keyword]);

	useEffect(()=>{
		if(page === 1) return;
		fetchImages(keyword, page)
			//Ponerlo asi me sirve para quitar la deps  images de useEffect
		.then(imgs => setImages(prevImages => [...prevImages, ...imgs]));

	// eslint-disable-next-line
	},[page]);

	return [images, setPage]	
}

export default useImages;