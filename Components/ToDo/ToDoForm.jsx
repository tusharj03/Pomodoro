import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoIosAddCircle } from "react-icons/io";
import { toast } from "react-toastify";

const ToDoForm = ({ toDoItems, setToDoItems }) => {
  const [todo, setToDo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setToDo("");
    // Remove the condition that checks for the maximum number of to-do items
    setToDoItems((prevValues) => [
      ...prevValues,
      { id: uuidv4(), todo: todo, check: false, editTodo: false },
    ]);
  };


  useEffect(() => {
    // Save todo items to local storage whenever the list changes
    localStorage.setItem("todos", JSON.stringify(toDoItems));
  }, [toDoItems]);

  return (
    <div className="todo-form-wrapper ">
      <p>Enter tasks for the day 🏔️</p>
      <form action="" className="todo-form" onSubmit={handleSubmit}>
        <input
          value={todo}
          type="text"
          name="adventure"
          placeholder="Enter your task"
          className="todo-form-input"
          onChange={(e) => {
            setToDo(e.target.value);
          }}
        />
        <button
          alt="todo-add-btn"
          type="submit"
          className="todo-form-addBtn btn"
        >
          <IoIosAddCircle />
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
