import React from "react";
import "./style.css";

import Tableheader from "..//Tableheader";
import Tablebody from "..//Tablebody";


function Table(props) {
  return (
    <table className="table table-sm table-striped table-hover" {...props}>
       <Tableheader/> 
       <Tablebody {...props}/>
        
    </table>
  );
}

export default Table;
