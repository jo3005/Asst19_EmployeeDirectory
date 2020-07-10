import React, { useRef } from "react";


function Form() {
  const inputRef = useRef();
  
  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "add",
      name: inputRef.current.value
    });
    inputRef.current.value = "";
  }

  return (
    <div>
      <h1>Employee list</h1>
      <form className="form-group mt-5" onSubmit={handleSubmit}>
        <input
          className="form-control"
          ref={inputRef}
          placeholder="What are you looking for?"
        />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Form;