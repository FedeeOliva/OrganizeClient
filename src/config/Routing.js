import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BoardPage from '../pages/board';
import UserPage from '../pages/user';
import LoginPage from '../pages/login';
import PrivateRoute from './PrivateRoute';
import NotFound from '../pages/404';

const Routing = (props) => {
	return (
		<Router>  
			<Switch>
				<PrivateRoute path="/board/:id" component={BoardPage}/>
				<PrivateRoute path="/user" component={UserPage}/>
				<Route exact path="/" component={LoginPage}/>
				<Route path="*" component={NotFound}/>
			</Switch>
		</Router>
	)
}

export default Routing;
