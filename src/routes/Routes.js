import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import DarkHeaderRoutes from './../components/DarkHeaderRoutes';
import LightHeaderRoutes from './../components/LightHeaderRoutes';

import Landing from './../views/Landing';
import Legal from './../views/Legal';
import NotFound from './../views/NotFound';


class Routes extends Component {
	render() {
	    return(
	    	<Router>
		    	<Switch>
		    		<DarkHeaderRoutes
		                component={ Landing }
		                exact
		                path="/"
		            />
		            <LightHeaderRoutes
		                component={ Legal }
		                exact
		                path="/legal"
		            />
		            <LightHeaderRoutes
		                component={ NotFound }
		                exact
		                path="/not-found"
		            />

				  	<Redirect to="/not-found" />
				</Switch>
		    </Router>
	    	
	    );
	}
}

export default Routes