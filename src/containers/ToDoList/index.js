import React, {Component} from "react";
import ToDoItem from "../../components/ToDoItem/"
import NewTodoForm from "../../components/NewTodoForm/"
import styled from "styled-components"

const Container = styled.div`
    background: #2b2e39;
    margin: 0 auto;
    width: 80%;
    padding:14px;
    border-radius: 14px;
    margin-top: 14px;
    `
const Header = styled.h1`
    color: #ffffff;
`
const DestroyButton = styled.button`
    border-radius: 10px;
    background: red;
    padding: 5px;
    color: #ffffff;
    margin-button: 10px;
`

class ToDoList extends Component {

    constructor(props){
        super(props)
        console.log('Hello from constructor2')
      }
    
    componentDidMount = () => {
        console.log('component mounted2')
      }

    componentDidUpdate = () => {
        console.log(`component {ToDoList} updated`)

    }

    static defaultProps = {
        tasks: [
            {text: "kupic chreba"},
            {done: true, text: "wywalic smieci"}  
        ],
        title: "Moja ToDo lista"
    }
    
    state = {
        tasks: this.props.tasks,
        draft: ""
    }
  
    updateDraft = event => {
        this.setState({draft: event.target.value})
    }

    addToDo = () => {
        const {tasks, draft} = this.state
        const list = tasks
        list.push({text: draft, done: false})
        this.setState({tasks: list, draft: ""})
    } 

    removeAll = () => {
        this.setState({tasks: []})
    }

    render(){
        const {title} = this.props
        const {tasks, draft} = this.state
        return(
        <Container>
            <DestroyButton onClick={this.removeAll}>Remove all</DestroyButton>
            <Header>{title}</Header>
            {tasks.map(task => <ToDoItem text={task.text} done={task.done} />)}
            <NewTodoForm 
            onSubmit={this.addToDo}
            onChange={this.updateDraft}
            draft={draft}/>
        </Container>
        )
    }
}

export default ToDoList