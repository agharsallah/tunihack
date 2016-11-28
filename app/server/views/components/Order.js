/*defining the navbar*/
//and setting the language switcher here
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './Layout'
import Widget from './Widget'
import Search from './Search'

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
              <Search/>
            </div>
				</Paper>
			
			<Paper className='col-md-8' style = {{height:'auto',marginRight:'10px',marginLeft:'10px'}}>

			 <div className='col-md-12 topP' style = {{marginBottom:'20px'}}>
              <div className = 'col-md-5'> &nbsp;</div>
              <h1 >Order food</h1>
              <section className="tiles" >
 				<Widget name="tastira" idd='583a9d4b6d18402429e0304e' styles='style2' links ='https://res.cloudinary.com/dcgm8rokt/image/upload/v1480210494/tastira_yxmfaa.jpg'  ingredient='tomato,cheese'/>
              	<Widget name="ma9arouna" idd='583a9d4b6d18402429e0304e' styles='style3' links='http://res.cloudinary.com/dcgm8rokt/image/upload/v1480340645/Make-a-Quick-Italian-Spaghetti-Step-9_y62mfk.jpg'  ingredient='tomato,cheese'/>
              	<Widget name="Chakchouka"  idd='583a9d4b6d18402429e0304e 'styles='style1' links='http://res.cloudinary.com/dcgm8rokt/image/upload/v1480340664/chakchouka-du-moyen-orient_ykoqub.jpg' ingredient='tomato,cheese'/>
              	<Widget name="hargma" idd = '583a9d4b6d18402429e0304e' styles='style4' links = 'http://res.cloudinary.com/dcgm8rokt/image/upload/v1480340786/maxresdefault_zkvw1f.jpg' ingredient='tomato,cheese'/>
 				</section>
              
            </div>
            
			</Paper>
	    	</div>
	    	</MuiThemeProvider>
		);
	}
};
