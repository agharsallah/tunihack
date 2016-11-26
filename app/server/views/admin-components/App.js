import React from 'react';
import Paper from 'material-ui/Paper';
import Layout from './Layout'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


	
class App extends React.Component {
  constructor(props) {
    super(props);

  }


   render() {
      return (
        
         	<MuiThemeProvider>
           <div>
 
            <Layout/>
         		<h1>HI Admin</h1>
            </div>
         	</MuiThemeProvider>

        
      );
   }
}

export default App;