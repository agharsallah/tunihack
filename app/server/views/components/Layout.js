/*defining the navbar*/
//and setting the language switcher here
import React, { Component } from 'react';
import {Link} from 'react-router';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class Layout extends Component{

	constructor(props) {
    super(props);
	  }


	render(){

		return(
			<div>

		<div className="navbar navbar-info">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		      <a className="navbar-brand" href="javascript:void(0)">Share & Gain</a>
		    </div>
		    <div className="navbar-collapse collapse navbar-responsive-collapse">
		      <ul className="nav navbar-nav">
		        <li><Link to={'/home'} activeClassName="activeN">home</Link></li>
		        <li><Link to={'/order'} activeClassName="activeN">Order</Link></li>
		        <li><Link to={'/requests'} activeClassName="activeN">Requests</Link></li>
		        <li><Link to={'/mymeals'} activeClassName="activeN">my meals</Link></li>
		        <li><Link to={'/user-rating'} activeClassName="activeN">my ratings</Link></li>
		        
		        <li ><Link to={'/About'} activeClassName="activeN">about</Link></li>
		        <li ><Link to={'/logout'} activeClassName="activeN">signout</Link></li>
		       
		      </ul>
		    </div>
		  </div>
		</div>

      	

    </div>
		);
	}
};
