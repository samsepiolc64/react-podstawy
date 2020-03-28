import React, {Component} from 'react';

class ToDoList extends Component {
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <div><p>Record a React JS video</p></div>
        <div><p>Go for walk</p></div>
      </div>
    )
  }
}

class App extends Component {
  render(){
    return(
      <div>
        <ToDoList title="My Stuff" />
      </div>
    )
  }
}

export default App;
