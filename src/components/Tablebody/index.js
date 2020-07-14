import React from "react";
import "./style.css";
import Tablerow from "..//Tablerow"

function Tablebody (props) {
    console.log("props.employees",props.data);
  return (
      <tbody className="tbody">
          {props.data.map(employee=>{
              return(
                <Tablerow 
                    employeeid= {employee.employeeid}
                    name= {employee.name}
                    jobtitle= {employee.jobtitle}
                    email= {employee.email}
                    photo= {employee.photo}      
              />
              )
              
          })}
          

      </tbody>
    
  );
}

export default Tablebody;