import React from "react";
import "./style.css";

import Tableheader from "..//Tableheader";
import Tablebody from "..//Tablebody";


function Table(props) {
  return (
    <div className="table-responsive">
      <table className="table table-sm table-striped table-fixed" {...props}>
        <Tableheader {...props}/> 
        <Tablebody {...props}/>
          
      </table>
    </div>
  );
}

export default Table;
