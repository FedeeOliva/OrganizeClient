import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {Card,Title} from './style';

const BoardCard = ({title, id,imageID}) => {
	//const {img} = board;
	let history = useHistory();
	const [image, setImage] = useState('');

	const handleClick = () =>{
		history.push(`/board/${id}`);
	}

	useEffect( () =>{
		if(imageID){
			fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_APIKEYIMAGES}
				&id=${imageID}`)
			.then( res => res.json())
			.then(data => setImage(data.hits[0].webformatURL))			
		}
	},[imageID]);
		
	return (
		<Card 
			onClick={handleClick}
			image={image}
			className="shadow"
		>				
			<Title>{title}</Title>    	
		</Card>
	)
}

export default BoardCard;