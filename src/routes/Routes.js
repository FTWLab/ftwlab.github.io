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
						basename={ process.env.PUBLIC_URL }
		                component={ Landing }
		                exact
		                path="/"
		            />
		            <LightHeaderRoutes
						basename={ process.env.PUBLIC_URL }
		                component={ Legal }
		                exact
		                path="/legal"
		            />
		            <LightHeaderRoutes
		                basename={ process.env.PUBLIC_URL }
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