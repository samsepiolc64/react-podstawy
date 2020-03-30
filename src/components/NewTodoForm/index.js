import React, {Component} from "react";


const NewTodoForm = ({onChange, draft, onSubmit}) => (
    <div>
      <input type="text" onChange={onChange} value={draft} />
      <button onClick={onSubmit}>dodaj</button>
    </div>
  )

  export default NewTodoForm