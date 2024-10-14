import React, { useState } from "react";


const InputField = ({addItem}) => {
  const [todoInput, setTodoInput] = useState("");
  const handleButtonClicked = () => {
    addItem(todoInput)
    setTodoInput("")
  }
  return (
    <div>
      <input
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        type="text"
        placeholder="Add a new To-Do"
        className="input-field"
      />
      <button onClick={handleButtonClicked}>Add</button>
    </div>
  );
};

export default InputField;
