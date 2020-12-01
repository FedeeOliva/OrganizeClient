import React, {useContext, useEffect} from 'react';
import Layout from '../../components/layout';
import BoardContext from '../../context/board/boardContext';
import AuthContext from '../../context/authenticate/authContext';
import {ListOfBoards, Title, Container} from './style';
import BoardCard from '../../components/boardCard';
import Waves from '../../components/waves';
import {Card} from '../../components/boardCard/style';
import NewBoard from '../../components/newBoard';
import useModal from '../../hooks/useModal';

const UserPage = (props) => {
	const {user} = useContext(AuthContext);
	const {boards, getBoards} = useContext(BoardContext);

    const [Modal,setShow] = useModal(false);

    useEffect(()=>{
        getBoards();
    // eslint-disable-next-line
    }, []);

    const handleNewBoard = () =>{
        setShow(true);
    }

  return (
    <Layout>
        <Modal>
            <NewBoard
                setShow = {setShow}
            />
        </Modal>
    	<Waves/>
        <Container>
        	<Title>Tableros de {user.username}</Title>            
        	<ListOfBoards>
        		{boards.map( board => 
        		<BoardCard
        			key = {board._id}
                    title = {board.name}
                    id = {board._id}
                    image = {board.mediumImageURL}
        			/>
        		)}
                <Card onClick = {handleNewBoard}>
                    Nuevo tablero
                </Card>

        	</ListOfBoards>

        </Container>
    </Layout>
  )
}

export default UserPage;