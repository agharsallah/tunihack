import React from 'react';
import Paper from 'material-ui/Paper';
import Layout from './Layout'
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Dropzone from 'react-dropzone'
import RaisedButton from 'material-ui/RaisedButton';
import { WithContext as ReactTags } from 'react-tag-input';
import io from'socket.io-client' ;

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

	
class AddFood extends React.Component {
  constructor(props) {
    super(props);
    this.socket = io();
    this.state = {
      value: 1,
      name: '',
      time : '',
      ingredient:'',
      price : '',
      data:[],
       tags: [  ],
          suggestions: ["Banana", "Mango", "Pear", "Apricot"]
    };
  this.handleChange = this.handleChange.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
  this.handleAddition = this.handleAddition.bind(this);
  this.handlePrice = this.handlePrice.bind(this);
  this.handleName = this.handleName.bind(this);
  this.handleIngredients = this.handleIngredients.bind(this);
  this.handleDate = this.handleDate.bind(this);
    this.sendFormInfoToServer = this.sendFormInfoToServer.bind(this);

      this.socket = io();
  }
  

  handleChange (event, index, value) {
    this.setState({value})
  } 
  onDrop (files) {
      console.log('Received files: ', files);
    }
    /*for submit*/

  sendFormInfoToServer(){
    //check that fields are full
    //gather all form info in an object
    var formData = {
        value: this.state.value,
          name:this.state.name,
          time:this.state.time,
          price:this.state.price,
          ingredient:this.state.ingredient
          };
    console.log(formData);
    //send order with socket to server
    this.socket.emit('AddedMeal',formData);
    //change the view and inform the whole that the order is delivered

  }
    /*for date*/
    handleDate(e,time){
    console.log('fd date')
    console.log(time)
    this.setState({time});
    }
  /*for fd price*/
    handlePrice(price){
    console.log('fd price')
    console.log(price.target.value)
    this.setState({price:price.target.value});
  }
  /*for fd price*/
    handleIngredients(ingredient){
    console.log('fd ingredi')
    console.log(ingredient.target.value)
    this.setState({ingredient:ingredient.target.value});
  }
  /*for food name*/
  handleName(name){
    console.log('fd name')
    console.log(name.target.value)
    this.setState({name:name.target.value});
  }
  /* for tags*/
   handleDelete(i) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
    }
    handleAddition(tag) {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.setState({tags: tags});
    }

   render() {
      let tags = this.state.tags;
        let suggestions = this.state.suggestions;
      return (
        
         	<MuiThemeProvider>
            <div>
            <Layout/>
            <div className = 'col-md-2'></div>
         		<Paper className='col-md-8' style = {{height:'auto',marginTop:'30px'}}>
            
            <div className='col-md-12 topP' style = {{marginBottom:'20px'}}>
              <div className = 'col-md-5'> &nbsp;</div>
              <h1 >Add food</h1>
            </div>
            
            <div className='col-md-12'>
              <p className='col-md-5 topP'>Food name :</p>
              <TextField
                className='col-md-7'
                hintText="ex : Ma9rouna"
                style={{width : '50%'}}
                onChange={this.handleName}
              />
            </div>
            <br/>

            <div className='col-md-12'>
              <p className='col-md-5 topP'>Ingredients :</p>
              <TextField
                className='col-md-7'
                hintText="ex : Tomato,onion,..."
                style={{width : '50%'}}
                onChange={this.handleIngredients}
              />
            </div>
            <br/>
            
            <div className = 'col-md-12'>
              <p className='col-md-5 topP'>the food is available at :</p>
              <TimePicker
               className='col-md-7'
                textFieldStyle={{width : '50%'}}
                 hintText="12hr Format"
                 onChange={this.handleDate}
                 />

            </div>
            <br/>

             <div className = 'col-md-12'>
                <p className='col-md-5 topP'>Quantity Available :</p>
                <SelectField
                  value={this.state.value}
                  onChange={this.handleChange}
                  className='col-md-7'
                  floatingLabelStyle={{width:'50%'}}
                >
                  <MenuItem value={1} primaryText="1 person" />
                  <MenuItem value={2} primaryText="2 person" />
                  <MenuItem value={3} primaryText="3 person" />
                  <MenuItem value={4} primaryText="4 person" />
                  <MenuItem value={5} primaryText="5 persons" />
                  <MenuItem value={10} primaryText="+10 persons" />
                </SelectField>
            </div> 
            <br/>
            
            <div className = 'col-md-12'>
              <p className='col-md-5 topP'>Price :</p>
              <TextField
                className='col-md-7'
                hintText="ex : 3 DT"
                style={{width : '50%'}}
                onChange={this.handlePrice}
              />            
            </div>
            <br/>

            <div className = 'col-md-12'>
              <p className='col-md-5 topP'>Picture Upload :</p>
              <div className='col-md-7 topP' >
              <Dropzone onDrop={this.onDrop} style ={{height:'20px'}}>
                    <RaisedButton label="Upload pic" secondary ={true}  />

              </Dropzone>
              </div>
            </div>
            <br/>

             <div className = 'col-md-12 topP'>
            <div className='col-md-3'>&nbsp;</div>
                <RaisedButton 
                label="Submit" 
                primary={true}  
                style={{width:'50%'}}
                onTouchTap={this.sendFormInfoToServer}
                />
            </div>
            <br/> <br/> <br/>
{/*             <ReactTags tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    />*/}

            </Paper>
            
            <div className = 'col-md-2'></div>
            </div>
         	</MuiThemeProvider>

        
      );
   }
}

export default AddFood;