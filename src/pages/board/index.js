import React, {useContext, useEffect} from 'react';
import BoardContext from '../../context/board/boardContext';
import {useParams} from 'react-router-dom';
import Layout from '../../components/layout';
import Tools from '../../components/tools';
import Lista from '../../components/lista';
import {Background, Listas} from './style';


const BoardPage = (props) => {
	const {id} = useParams()
	const {board, getBoard} = useContext(BoardContext);
	
	useEffect( () => {
		getBoard(id);
	},[]);

  return (
    <Layout footer={false}>    	
    	<Background image={board.largeImageURL}>
    		<Tools/>
    		<Listas>
    			<Lista/>
    			<Lista/>
    			<Lista/>
    			<Lista/>
    			<Lista/>
    			<Lista/>
    			<Lista/>
    			<Lista/>
    		</Listas>
    	</Background>  	
    </Layout>
  )
}

export default BoardPage;