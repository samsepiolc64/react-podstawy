import React, {Component} from "react"
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
    componentDidMount = () => {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Accept', 'application/json');
        myHeaders.append('Origin','http://127.0.0.1:5000/login');
        myHeaders.append('x-access-token', 'eyJeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiI3YzI0YWI4My04YTU4LTQyOTMtYTU3Yi1iYmQzMTYyY2RhMTciLCJleHAiOjE1ODU5MTI4MjF9.oV0XyccsTX4zR3XndISy-SrHn_-x-9rUu7cyYPlki6Y0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiI0NmQyMDBkMi0zOGMyLTQ3YjEtYjAzNS1jZjlmYzIwYTA4NGQiLCJleHAiOjE1ODU5MTA0MzB9.4-3tYMbxyN4FrdE19grCirUs8T2Q5KeiFfGFSUl63P4eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiI0NmQyMDBkMi0zOGMyLTQ3YjEtYjAzNS1jZjlmYzIwYTA4NGQiLCJleHAiOjE1ODU5MTEwMzZ9.PT2TPazivJsHRQS7Kp-W-YJyQF2FTDAOq-sJ0Xtib_I');
        myHeaders.append('Authorization', 'Basic YWRtaW5AYWRtaW4ucGw6MTIzNDU=');
    
        fetch({
            mode: 'cors',
            method: 'GET',
            headers: myHeaders
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log('Authorization failed : ' + error.message));
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