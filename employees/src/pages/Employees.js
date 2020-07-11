import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Row from "../components/Row";
import Table from "../components/Table";
import Form from "../components/Form";


function Employees() {


  const [employees, setEmployees] = useState([]);
  const [allemployees,setAllEmployees]=useState([]);
  const [filterString,setFilterString] = useState("");

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {
    const empArray=require("../employees.json");
    const filterString="";
    API.fetchEmployees(empArray)
        .then(employees => {
        setEmployees(employees);
        setAllEmployees(employees);
      })
      .catch(err => console.log(err));
  }

  function handleFormSubmit(newfilter){
    function filterEmployees(empString){
      if (empString === "") setEmployees(allemployees)
      else setEmployees(allemployees.filter(employee=> employee.name.toLowerCase().includes(newfilter.toLowerCase())))  
    };  
    setFilterString(newfilter)
    filterEmployees(filterString);
  }

  function handleHeaderClick(){

    let sortedArray=[...employees].sort((a,b) => a.lastname.localeCompare(b.lastname));
    console.log("sortedarray",sortedArray);
    setEmployees(sortedArray);

    }


  return (
    <div>
      <h2 className="text-center">These are the current personnel employed at this company</h2>
      <Row >
        <Form
          handleFormSubmit={handleFormSubmit}
        />
      </Row>
      <Row>
        <Table
          data={employees}
          handleHeaderClick={handleHeaderClick}
        />
      </Row>
      
    </div>
  );
}
 
export default Employees;
