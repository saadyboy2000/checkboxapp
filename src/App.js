import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {

      sonia: false,
      maria: false,
      john : false,
      michael : false
    }  
   
  };

  handleSoniaCheck() {
   this.setState((state) => ({ sonia: !state.sonia}));
  }

  handleMariaCheck() {
   this.setState((state) => ({ maria: !state.maria}));
  }

 handleJohnCheck() {
   this.setState((state) => ({ john: !state.john}));
  }

  handleMichaelCheck() {
   this.setState((state) => ({ michael: !state.michael}));
  }    

  render() {
     
    return (
      <div className="App">
        <div>
        <label>
        <input
          type = "checkbox"
          onChange = {() => this.handleSoniaCheck()}
          checked = {this.state.sonia}
        />
        Sonia: {this.state.sonia.toString()}
       </label>
      </div>

      <div>
       <label>
        <input
          type = "checkbox"
          onChange = {() => this.handleMariaCheck()}
          checked = {this.state.maria}
        />
        Maria: {this.state.maria.toString()}
       </label>
      </div>

       <div> 
       <label>
        <input
          type = "checkbox"
          onChange = {() => this.handleJohnCheck()}
          checked = {this.state.john}
        />
        John: {this.state.john.toString()}
       </label>
      </div>

      <div>
       <label>
        <input
          type = "checkbox"
          onChange = {() => this.handleMichaelCheck()}
          checked = {this.state.michael}
        />
        Michael: {this.state.michael.toString()}
       </label>
      </div>
      </div>
    );
  }
}

export default App;
