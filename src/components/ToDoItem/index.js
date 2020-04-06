import React, {Component} from "react";
import styled from "styled-components"

const Item = styled.div`
    background: #343744;
    border-radius: 10px;
    padding: 14px;
    margin-bottom: 7px;
    color: ${props => props.done ? "#1fd84d" : "auto"};
    text-decoration: ${props => props.done ? "line-through" : "auto"};
`

class ToDoItem extends Component {
  
  static defaultProps = {
    done: false
  }

  state = {
    done: this.props.done
  }
    
  toggleDone = () => {
    //this.setState({ done: !this.state.done })
    fetch(
      `http://127.0.0.1:5000/todo/${this.props.id}`,
      { 
        mode: "cors",
        method: "PUT",
        headers: {
          "Accept":"application/json",
            "Content-Type": "application/json",
            "x-access-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiJjNDliOTgxZS0zYzU4LTQyY2MtOTRhMC0yMTFjYzM0NTk0NWEiLCJleHAiOjE1ODYxNzI1Njd9.VHsj2jUUBH25HPrynAi1tGWG-Vuze_avf38VNsKdONE"
        },
        body:{}
      }
    ) 
  .then (response => {
    if(response.ok){
      this.setState({done: !this.state.done})
    }
  })
  .catch(error => console.log('Authorization failed : ' + error.message));
  
    }
  



  render() {
    const { text } = this.props
    return (
      <Item onClick={this.toggleDone} done={this.state.done}>
        {text}
      </Item>
      )
    }
  }
  
  export default ToDoItem;