import React, {useRef} from "react";

function Form(props) {
    const inputRef = useRef();
  
  return (
    <div>
      
      <form className="form-group mt-5" 
        onClick={evt => {
            evt.preventDefault(); 
            props.handleFormSubmit(inputRef.current.value)
            }
        }>
            
        <input
          className="form-control"
          ref={inputRef}
          placeholder="Who are you looking for?"
        />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Form;