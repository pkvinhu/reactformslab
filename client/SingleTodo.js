import React, {Component} from 'react'
import Todo from './Todo'
import UpdateTodo from './UpdateTodo'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class SingleTodo extends Component {
  constructor () {
    super()
    this.state = {
      todo: {},
      serverError:false
    }
    this.update=this.update.bind(this)
  }

  update(newTodo){
    this.setState({todo:newTodo})
  }

  componentDidMount () {
    const todoId = this.props.match.params.todoId
    axios.get(`/api/todos/${todoId}`)
    .then((res)=>this.setState({todo: res.data}))
    .catch(this.setState({serverError:true}))
  }

  render () {
    const todo = this.state.todo

    return (
      <div id='single-todo'>
        <Todo todo={todo} />
        <UpdateTodo todo={this.state.todo} update={this.update} serverE={this.state.serverError}/>
        <Link to='/'>Back</Link>
      </div>
    )
  }
}
