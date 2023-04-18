import React from "react";
import Can from '../style/logo/can.png'
import edit from '../style/logo/edit.png'

const Todo = ({title, text, done, deleter}) => {
  return (
    <div className="todo mx-auto">
      <h3>{title.toUpperCase()}</h3>
      <h4>{text}</h4>
      <p>
        <strong>Done:</strong>
        {done ? "  Yes" : "  No"}
      </p>
      <div>
        <img src={edit} alt="image" width="30px" />
        <img style={{marginLeft:"1rem"}}
          onClick={() => deleter()}
          src={Can}
          alt="image"
          width="50px"
        />
      </div>
    </div>
  );
};

export default Todo;
