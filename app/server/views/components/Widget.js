import React from 'react';
import Paper from 'material-ui/Paper';
import Layout from './Layout'
import {Link} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



	
class Widget extends React.Component {
  constructor(props) {
    super(props);

  }


   render() {
    console.log(this.props.idd)
    const lin = '/order/'+this.props.idd ;
      return (
         	<MuiThemeProvider>
              
                <article className={this.props.style}>
                  <span className="image"style={{height:'200px'}}>
                    <img src={this.props.links} alt="" />
                  </span>
                  <Link to={lin}>
                    <h2>{this.props.name}</h2>
                    <div className="content">
                      <p>test</p>
                    </div>
                  </Link>
                </article>
                
             


         	</MuiThemeProvider>
      );
   }
}

export default Widget;