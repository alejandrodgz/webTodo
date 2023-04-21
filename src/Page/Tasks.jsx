import React from 'react'
import { useState, useContext } from 'react'
import Container from '../components/Container'
import Todo from '../components/Todo'
import { TodoContext } from '../context/TodoContext'



const Tasks = ({title}) => {

  const { todos,  checkTodo } = useContext(TodoContext);



  const TodosTag = todos
  .filter(todo => !todo.done)
  .map(todo => (
    <Todo
      key={todo.id}
      id={todo.id}
      title={todo.title}
      text={todo.text}
      done={todo.done}
      deleter={() => checkTodo(todo.id)}
    />
  ));

  return (
    <Container title={title}>
    {TodosTag}
    </Container>
  )
}

export default Tasks