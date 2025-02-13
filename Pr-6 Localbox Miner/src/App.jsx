import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeForm from "./Components/EmployeeForm";
import EmployeeList from "./Components/EmployeeList";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/styles.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(savedEmployees);
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
  };

  const editEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map(emp => 
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );
    setEmployees(updatedEmployees);
    setSelectedEmployee(null);
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter(emp => emp.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <Container fluid className="app-container">
      <Row className="full-height">
        <Col md={4} className="left-section">
          <EmployeeForm 
            addEmployee={addEmployee} 
            editEmployee={editEmployee} 
            selectedEmployee={selectedEmployee} 
          />
        </Col>
        <Col md={8} className="right-section">
          <EmployeeList 
            employees={employees} 
            deleteEmployee={deleteEmployee} 
            selectEmployee={setSelectedEmployee} 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
