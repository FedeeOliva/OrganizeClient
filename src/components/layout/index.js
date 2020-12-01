import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import {Grid, Main} from './style';

const Layout = ({children, footer = true}) => {

  return (
    <Grid>
    	<Navbar/>
    	<Main>
    		{children}
    	</Main>    	
    	{ footer && 
    	<Footer/>
    	 }  	
    </Grid>
  )
}

export default Layout;