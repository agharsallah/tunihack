/*defining the navbar*/
//and setting the language switcher here
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './Layout'


export default class OrderItem extends Component{

	constructor(props) {
    super(props);
	  }


	render(){

		return(
			<MuiThemeProvider>
			<div>
			<Layout/>
				<h1>ITEM</h1>
	    	</div>
	    	</MuiThemeProvider>
		);
	}
};
