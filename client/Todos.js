import React, {Component} from 'react'
import axios from 'axios'
import Todo from './Todo'
import CreateTodo from './CreateTodo'

export default class Todos extends Component {
  constructor () {
    super()
    this.state = {
      todos: [],
      serverError: false
    }
    this.addTodo=this.addTodo.bind(this)
    this.removeTodo=this.removeTodo.bind(this)
  }

  addTodo(newTodo){
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  removeTodo(todo){
    const newTodos = [...this.state.todos].filter(todos=>todo!==todos)
    axios.delete(`/api/todos/${todo.id}`, newTodos)
    .then((res)=>this.setState({todos: newTodos}))
    .catch(this.setState({serverError:true}))
  }

  async componentDidMount () {
    const res = await axios.get('/api/todos')
    this.setState({todos: res.data})
  }

  render () {
    return (
      <div id='todos'>
        <CreateTodo add={this.addTodo} serverE={this.state.serverError}/>
        {
          this.state.todos.map(todo => <Todo todo={todo} key={todo.id} remove={this.removeTodo}/>)
        }
      </div>
    )
  }
}
