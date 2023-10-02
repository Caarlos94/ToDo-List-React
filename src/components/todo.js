import { useState } from "react";

export default function ToDo({ item, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function EditForm() {
    const [newValue, setNewValue] = useState(item.title);

    function handleClick() {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    }

    function handleChange(e) {
      let newVal = e.target.value;
      setNewValue(newVal);
    }

    return (
      <div className="todoUpdate">
        <input
          className="todoInput"
          type="tex"
          value={newValue}
          onChange={(e) => handleChange(e)}
        ></input>
        <button className="button" onClick={() => handleClick()}>
          Update
        </button>
      </div>
    );
  }

  function NoEdit() {
    function handleClick() {
      onDelete(item.id);
    }

    return (
      <div className="todoInfo">
        <span className="todoTitle">{item.title}</span>
        <button className="button" onClick={() => setIsEdit(true)}>
          Edit
        </button>
        <button className="buttonDelete" onClick={() => handleClick()}>
          Delete
        </button>
      </div>
    );
  }

  return (
    <div className="todo">
      {isEdit ? <EditForm></EditForm> : <NoEdit></NoEdit>}
    </div>
  );
}
