import React from 'react';
import Paper from 'material-ui/Paper';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


	
class App extends React.Component {
  constructor(props) {
    super(props);

  }


   render() {
      return (
         <div>
         	<MuiThemeProvider>
         		<h1>HI Simple</h1>
         	</MuiThemeProvider>

         </div>
      );
   }
}

export default App;