/*defining the navbar*/
//and setting the language switcher here
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './Layout'
import Widget from './Widget'

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class Order extends Component{

	constructor(props) {
    super(props);
	  }


	render(){

		return(
			<MuiThemeProvider>
			<div>
			<Layout/>
			
				<Paper className='col-md-3' style = {{marginLeft:'50px'}}>
				<div className='col-md-12 topP' style = {{marginBottom:'20px'}}>
              <div className = 'col-md-4'> &nbsp;</div>
              <h1 >Search </h1>
            </div>
				</Paper>
			
			<Paper className='col-md-8' style = {{height:'auto',marginRight:'10px',marginLeft:'10px'}}>

			 <div className='col-md-12 topP' style = {{marginBottom:'20px'}}>
              <div className = 'col-md-5'> &nbsp;</div>
              <h1 >Order food</h1>
              <section className="tiles" >
 				<Widget  name="tastira" idd='583a1ec768354b9c2165d84e'/>
              	<Widget name="ma9arouna" idd='583a1ec768354b9c2165d84e'/>
              	<Widget name="mlou5eya"/>
              	<Widget name="hargma"/>
 				</section>
              
            </div>
            
			</Paper>
	    	</div>
	    	</MuiThemeProvider>
		);
	}
};
