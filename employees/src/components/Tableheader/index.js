import React from "react";
import "./style.css";

function Tableheader () {
  return (
      <thead className="thead-dark">
          <tr>
            <th scope="col">EmployeeID</th>
            <th scope="col">Name</th>
            <th scope="col">Job Title</th>
            <th scope="col">Email</th>
            <th scope="col">Photo</th>
              
          </tr>
      </thead>
    
  );
}

export default Tableheader;