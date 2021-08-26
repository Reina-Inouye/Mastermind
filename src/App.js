import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';


class App extends Component {
  static defaultProps = {
      colors: [ "red", "orange","yellow","white","purple","green"] 
    };
  render() {
      return (
        <div className ="App">
          <Routes colors = {this.props.colors}/>
          </div>
      );
  }
}

export default App;
