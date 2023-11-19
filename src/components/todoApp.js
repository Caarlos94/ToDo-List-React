import { useState } from "react";
import ToDo from "./todo";
import "./todoApp.css";

export default function TodoApp() {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setTitle(value);
  }

  function onUpdate(id, value) {
    const temp = [...todo];
    const item = temp.find((e) => e.id === id);
    item.title = value;
    setTodo(temp);
  }

  function onDelete(id) {
    const items = todo.filter((e) => e.id !== id);
    setTodo(items);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
    };
    setTodo([...todo, newTodo]);
    setTitle("");
  }

  return (
    <div>
      <h1 className="title">TODO LIST</h1>
      <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="todoInput"
            type="text"
            onChange={(e) => handleChange(e)}
            value={title}
          ></input>
          <button className="buttonCreate">Create ToDo</button>
        </form>
        <div className="todosContainer">
          {todo.map((item) => {
            return (
              <ToDo
                key={item.id}
                item={item}
                onUpdate={onUpdate}
                onDelete={onDelete}
              ></ToDo>
            );
          })}
        </div>
      </div>
    </div>
  );
}
