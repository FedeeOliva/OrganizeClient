import React from 'react';
import { useHistory } from "react-router-dom";
import {Card,Title} from './style';


const BoardCard = ({title, id,image}) => {
	//const {img} = board;
	let history = useHistory();

	const handleClick = () =>{
		history.push(`/board/${id}`);
	}
		
	return (
		<Card 
			onClick={handleClick}
			image={image}
		>				
			<Title>{title}</Title>    	
		</Card>
	)
}

export default BoardCard;