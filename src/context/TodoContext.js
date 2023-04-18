import { createContext } from "react";

export const TodosContext = createContext([]);

export const Todos =[ 
  {id:1, title:"go shopping", text:"I've got to buy some groceries and fruits", done:false},
  {id:2, title:"go to car-wash", text:"go to the car-wash and buy a tire", done:false},
   {id:3, title:'go to the doctor', text:'take care of yourself', done:false}
  ]