import React, {useState,useContext, useEffect} from 'react';
import BoardContext from '../../context/board/boardContext';
import {Link} from "react-router-dom";
import {useParams} from 'react-router-dom';
import Layout from '../../components/layout';
import Tools from '../../components/tools';
import Lista from '../../components/lista';
import {Background, Listas} from './style';


const BoardPage = (props) => {
	const {id} = useParams()
	const {board, error, getBoard} = useContext(BoardContext);
    const {lists} = board;

    const [image, setImage] = useState('');
    /**/
	useEffect( () => {
		getBoard(id)      
	},[]);

    useEffect(() =>{
        if(board.imageID){
            fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_APIKEYIMAGES}
                &id=${board.imageID}`)
            .then( res => res.json())
            .then(data => setImage(data.hits[0].largeImageURL))          
        }

    }, [board.imageID]);    

  return (
    <Layout footer={false}>    	
    	<Background image={image}>
    		<Tools/>
            {error?
                <div class="alert alert-danger" role="alert">
                  Este tablero no existe o ha sido eliminado.
                <Link to="/user" class="alert-link"> Regresa a tus tableros</Link>
                </div>
            :
            <Listas>
            { lists && lists.map( list => 
                <Lista
                    key = {list._id}
                    list = {list}
                />
            )}
            </Listas>            
            }			
    	</Background>  	
    </Layout>
  )
}

export default BoardPage;