import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import Container from '../components/Container'
import Todo from '../components/Todo'

const History = ({title}) => {

  const {todos, deleteTodo, checkTodo} = useContext(TodoContext)

  const TodosTag = todos
  .map(todo => (
    <Todo
      key={todo.id}
      id={todo.id}
      title={todo.title}
      text={todo.text}
      done={todo.done}
      deleter={ todo.done? () => deleteTodo(todo.id):() => checkTodo(todo.id)}
    />
  ));


  return (
    <Container title={title}>
      {TodosTag}
    </Container>
  )
}

export default History