import React from 'react';
import Router from './config/Routing';
import { ThemeProvider } from 'emotion-theming';
import {theme} from './config/theme';
import AuthState from './context/authenticate/authState';
import BoardState from './context/board/boardState';

function App() {
  return (
    <ThemeProvider theme={theme}>
    	<AuthState>
    		<BoardState>  			
     			<Router/>    		
    		</BoardState>
    	</AuthState>
    </ThemeProvider>
    );
}

export default App;
