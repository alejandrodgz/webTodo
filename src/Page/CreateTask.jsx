import { useEffect, useState } from "react"
import Container from "../components/Container"
import { useContext } from "react";
import { TodoContext, TodoProvider } from "../context/TodoContext";
import { nanoid } from 'nanoid';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';


const CreateTask = ({title}) => {

  const navigate = useNavigate();
  const params = useParams()
  const {addTodo, todos, editTodo} =useContext(TodoContext)
  const [NewTask, setNewTask] = useState({});

  useEffect(()=>{
    if(params){
      console.log(params.id)
      const todoToEdit = todos.find(todo=> todo.id  == params.id)
      console.log(todoToEdit)
      setNewTask({...todoToEdit})
    }
  }, [])

  const handleObj = (e)=>{
    setNewTask(oldValue =>({
      ...oldValue, [e.target.name]: e.target.value
    }))
  }

  const addNewTodo = (e) => {
    e.preventDefault();
    
    if(params && params.id){
      editTodo(NewTask.id, NewTask)
    }else {
    addTodo({
      ...NewTask,
      id: nanoid(),
      done: false
    });
  }
    setNewTask({title:"", text:""});
    navigate('/');
  }


  return (
    <Container title={title}>
      <form onSubmit={addNewTodo}>
    <div className="mb-3 mx-auto">
      <label for="exampleInputEmail1" className="form-label">Task title</label>
      <input onChange={handleObj} name="title" value={NewTask.title} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text"></div>
    </div>
    <div className="mb-3 mx-auto">
      <label for="exampleInputPassword1" className="form-label">Description</label>
      <input onChange={handleObj} value={NewTask.text} type="text" name="text" className="form-control" id="exampleInputPassword1"/>
    </div>
    <button type="submit" className="btn btn-light">Submit</button>
  </form>
    </Container>
  )
}

export default CreateTask