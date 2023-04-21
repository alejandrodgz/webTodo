import React from "react";
import Can from "../style/logo/can.png";
import edit from "../style/logo/edit.png";
import { Link } from "react-router-dom";

const Todo = ({ id, title, text, done, deleter }) => {
  return (
    <div className="todo mx-auto" style={{backgroundColor: done?"#d3f7d2":"#f0e6eb"}}
    >
      <h3>{title.toUpperCase()}</h3>
      <h4>{text}</h4>
      <p>
        <strong>Done:</strong>
        {done ? "  Yes" : "  No"}
      </p>
      <div>
        <Link to={`/editTask/${id}`}>
        <img src={edit} alt="image" width="30px" />\</Link>
        {done ? (
          <img
            style={{ marginLeft: "1rem" }}
            onClick={() => deleter()}
            src={Can}
            alt="image"
            width="50px"
          />
        ) : (
          <h2
            style={{ display: "inline", marginLeft: "1rem", color:"#53f04f"}}
            onClick={() => deleter()}
          >
            ✓
          </h2>
        )}
      </div>
    </div>
  );
};

export default Todo;
