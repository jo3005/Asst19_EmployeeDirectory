import React, { useEffect, useState } from "react";
import API from "../utils/API";
//import CardContainer from "../components/CardContainer";
import Row from "../components/Row";
import Table from "../components/Table";

function Employees() {
  const [employee, setEmployee] = useState({});
  const [employees, setEmployees] = useState([]);
  const [empIndex, setEmpIndex] = useState(0);

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadEmployees();
  }, []);

 

  function loadEmployees() {
    const empArray=require("../employees.json");
    API.fetchEmployees(empArray)
      .then(employees => {
        setEmployees(employees);
        setEmployee(employees[0]);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h2 className="text-center">These are the current personnel employed at this company</h2>
      <Row >
        testrow
      </Row>
      <Row>
        <Table
          data={employees}

        />
      </Row>
      
    </div>
  );
}

export default Employees;
