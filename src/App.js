import React, { Component } from 'react';
import './App.css';
import Clock from './clock.js'
//declare a variable and use native date library to output a string

class App extends React.Component {
  render (){
    return( //can only return one element so need to place things in one tag...ie "div"
      <div>
        <Clock />
      </div>
    )
  }
}

export default App;
