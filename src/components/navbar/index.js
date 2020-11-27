import React, {useContext} from 'react';
import {Navbar,Nav,Brand, Cerrar} from './style';
import AuthContext from '../../context/authenticate/authContext';


const NavbarComponent = (props) => {

	const {authenticate, logOut} = useContext(AuthContext);

	const handleLogOut = async () => {
		await logOut();
	}
  return (
    <Navbar>
    	<Nav>
    		<Brand to="/">Organize</Brand>
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