import React from 'react';
import Paper from 'material-ui/Paper';
import Layout from './Layout'
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';

import io from'socket.io-client' ;


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

	
class Requests extends React.Component {
  constructor(props) {
    super(props);

  }


   render() {
      return (
        
         	<MuiThemeProvider>
           <div>
 
            <Layout/>
            <div className='col-md-2'></div>
        <Paper className='col-md-8'  style = {{height:'auto',marginTop:'30px'}}>
            <div className='col-md-12 topP' style = {{marginBottom:'20px'}}>
              <div className = 'col-md-5'> &nbsp;</div>
              <h1 >Orders</h1>
            </div>

            <div className='col-md-12'>
              <p className='col-md-3 topP'>ma9rouna for 2 persons</p>
              <p className='col-md-3 topP'>before : 12:30</p>
              <div className='col-md-3 topP'><Toggle/></div>
              <p className='col-md-3 topP'><RaisedButton label="Submit" primary={true}/></p>


            </div>
            <br/>
        </Paper>
         		
           <div className='col-md-2'></div>

            </div>
         	</MuiThemeProvider>

        
      );
   }
}

export default Requests;