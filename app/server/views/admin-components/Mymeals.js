import React from 'react';
import Paper from 'material-ui/Paper';
import Layout from './Layout'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

	
class Mymeals extends React.Component {
  constructor(props) {
    super(props);

  }


   render() {
      return (
        
         	<MuiThemeProvider>
           <div>
 
            <Layout/>
         		<h1>My meals</h1>
            </div>
         	</MuiThemeProvider>

        
      );
   }
}

export default Mymeals;