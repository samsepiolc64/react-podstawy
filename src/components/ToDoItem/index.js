import React, { Component } from "react";
import styled from "styled-components"
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  color: #f1f1f1;
  text-decoration: none;
  margin-left: 5px;
  &:hover{
    color: #ffffff;
  }
`

const Item = styled.div`
  background: #343744;
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 7px;
`

const ToDo = styled.div`
    color: ${props => props.done ? "#1fd84d" : "auto"};
    text-decoration: ${props => props.done ? "line-through" : "auto"};
    `

class ToDoItem extends Component {
  toggleDone = () => this.props.toggleDone(this.props.id)
  destroy = () => this.props.destroy(this.props.id)

  render() {
    const { id, text, done } = this.props
    return (
      <Item>
        <ToDo onClick={this.toggleDone} done={done}>{text}</ToDo>
        <button onClick={this.destroy}>x</button>
        <StyledLink to={`/todo_items/${id}`}>edit</StyledLink>
      </Item>
    )
  }
}

export default ToDoItem;