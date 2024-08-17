import React, { Fragment, useState } from "react";
import EditTodo from "./EditTodo";
import '../main.css';
const InputTodo = () => {
  const [description, setDescription] = useState("");
  const [isText, setIsText] = useState(false);

  const onSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.log(err.message);
    }
  };


  function setValue(event) {
    setDescription(event.target.value);
    setIsText(true);
    // console.log(event.target.value);
  }
  return (
    <Fragment>
      <h1 className=" text-center mt-5"  style={{color:"white"}}>Todo List</h1>
      <form action="" className="d-flex mt-5 input-group-lg" onSubmit={onSubmitForm}>
        <input
       
          placeholder="Enter your Task charLength=255"
          type="text"
          className="form-control give-shadow input-group-lg"
          value={description}
          onChange={setValue}
        />
        {isText && <button className="btn btn-success ">Add</button>}
      </form>
    </Fragment>
  );
};

export default InputTodo;
