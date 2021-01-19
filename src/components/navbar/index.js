import React, {useContext} from 'react';
import {Navbar,Nav,Brand, Cerrar} from './style';
import AuthContext from '../../context/authenticate/authContext';
import BoardContext from '../../context/board/boardContext';


const NavbarComponent = (props) => {

	const {authenticate, logOut} = useContext(AuthContext);
    const {logOutBoard} = useContext(BoardContext);

	const handleLogOut = async () => {
        logOutBoard();
		await logOut();
	}
  return (
    <Navbar>
    	<Nav>
    		<Brand to="/user">Organize</Brand>
    		{
    			authenticate?
    			<Cerrar onClick={handleLogOut}>Cerrar Sesión</Cerrar>
    			:
    			null
    			}
    		
    	</Nav>
    </Navbar>
  )
}

export default NavbarComponent;