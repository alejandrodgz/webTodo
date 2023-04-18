import React from 'react'
import { useState } from 'react'
import Container from '../components/Container'
import Todo from '../components/Todo'



const Tasks = ({title}) => {

  const todos = [ {id:1, title:"go shopping", text:"I've got to buy some groceries and fruits", done:false},
  {id:2, title:"go to car-wash", text:"go to the car-wash and buy a tire", done:false}, {id:3, title:'go to the doctor', text:'take care of yourself', done:false}]


  const [Todos, setTodos] = useState(todos);

  const handleRemove = (id)=>{
    setTodos(oldValue=>{
      return oldValue.filter(todo =>{
        if(todo.id != id){
          return todo
        }
      })
    })
  }

  const TodosTag = Todos.map(todo =>
    <Todo id={todo.id} title={todo.title} text={todo.text} done={todo.done} deleter={()=>handleRemove(todo.id)}/>
    )
  return (
    <Container title={title}>
    {TodosTag}
    </Container>
  )
}

export default Tasks