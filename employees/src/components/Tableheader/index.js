import React from "react";
import "./style.css";

function Tableheader (props) {
  return (
      <thead className="thead-dark">
          <tr>
            <th scope="col">EmployeeID</th>
            <th scope="col" onClick = {props.handleHeaderClick}>Name</th>
            
            <th scope="col">Job Title</th>
            <th scope="col">Email</th>
            
              
          </tr>
      </thead>
    
  );
}

export default Tableheader;