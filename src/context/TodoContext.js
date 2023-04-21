import { createContext, useState } from "react";

export const TodoContext = createContext();

const initialTodos = [
  {
    id: 1,
    title: "go shopping",
    text: "I've got to buy some groceries and fruits",
    done: false,
  },
  {
    id: 2,
    title: "go to car-wash",
    text: "go to the car-wash and buy a tire",
    done: false,
  },
  {
    id: 3,
    title: "go to the doctor",
    text: "take care of yourself",
    done: false,
  },
];

export const TodoProvider = (props) => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id, editedTodo) => {
    console.log(id,typeof(id))
    console.log(editedTodo.id, typeof(editedTodo.id))
    console.log(editedTodo)
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if(id === todo.id){
          return {...todo, title:editedTodo.title, text:editedTodo.text}
        } else {
          return todo
        }
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(oldValue=> oldValue.filter(todos => {
      if(todos.id != id){
        return todos
      } 
    }))
  }

  const checkTodo = (id) => {
    setTodos(oldValue=> oldValue.filter(todos => {
      if(todos.id === id){
        todos.done = true;
        return todos
      } else {
        return todos
      }
    }))
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, editTodo, deleteTodo, checkTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};
