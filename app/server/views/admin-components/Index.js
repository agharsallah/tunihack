import React from 'react'
import { render } from 'react-dom'
import App from './App.js'
import AddFood from './AddFood.js'
import Mymeals from './mymeals'
import Requests from './Requests'

import { Router, Route, browserHistory } from 'react-router';

render((
		<Router history={ browserHistory }>
	    	<Route path="/home" component={App}/>
	    	<Route path="/addfood" component={AddFood}/>
	    	<Route path="/mymeals" component={Mymeals}/>
	    	<Route path="/requests" component={Requests}/>

 		</Router>
 		),document.querySelector('#adminx'));
