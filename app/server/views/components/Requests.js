/*defining the navbar*/
//and setting the language switcher here
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './Layout'

export default class Requests extends Component{

	constructor(props) {
    super(props);
	  }


	render(){

		return(
			<MuiThemeProvider>
			<div>
			<Layout/>
			<h1>List of requests here</h1>
              
            </div>
            
	    	</MuiThemeProvider>
		);
	}
};
