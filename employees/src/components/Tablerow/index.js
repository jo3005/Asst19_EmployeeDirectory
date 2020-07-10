import React from "react";
//import "./style.css";

function Tablerow (props) {
    const {name,employeeid,jobtitle,email,photo} = props;

    console.log(props);
    return (
        <tr className="trow">
            <td>{employeeid}</td>
            <td>{name}</td>
            <td>{jobtitle}</td>
            <td>{email}</td>
            <td id="emp_photo">{photo}</td>
        </tr>   
        
    );
    }

export default Tablerow;