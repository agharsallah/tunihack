/*defining the navbar*/
//and setting the language switcher here
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './Layout'


export default class Search extends Component{

	constructor(props) {
    super(props);
	  }


	render(){

		return(
			<MuiThemeProvider>
			<div>
			<p> search by localization</p>
			<p> search by price</p>
			<p> search by diet</p>
			<p> search by kalories</p>
            </div>
			
			
	    	</MuiThemeProvider>
		);
	}
};
