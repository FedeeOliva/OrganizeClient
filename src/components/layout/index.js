import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import {Grid, Main} from './style';

const Layout = (props) => {

  return (
    <Grid>
    	<Navbar/>
    	<Main>
    		{props.children}
    	</Main>
    	<Footer/>
    </Grid>
  )
}

export default Layout;