import React, {Component} from "react";
import "./App.css"
import ToDoList from "./containers/ToDoList"
import {BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render(){
    return(
      <div>
        <ToDoList />
      </div>
    )
  }
}

export default App;