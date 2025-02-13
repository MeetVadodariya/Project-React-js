import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../styles/styles.css";

const EmployeeList = ({ employees, deleteEmployee, selectEmployee }) => {
  return (
    <Container className="employee-list">
      <h2 className="text-center mb-4">Employee List</h2>
      <Row className="justify-content-center">
        {employees.map((employee) => (
          <Col md={6} lg={4} key={employee.id} className="mb-4">
            <Card className="employee-card">
              <Card.Img
                variant="top"
                src={employee.image ? URL.createObjectURL(employee.image) : "https://via.placeholder.com/250"}
                alt="Employee"
                className="employee-img"
              />
              <Card.Body className="employee-card-body">
                <Card.Title>{employee.firstName} {employee.lastName}</Card.Title>
                <Card.Text>
                  <strong>Email:</strong> {employee.email} <br />
                  <strong>Address:</strong> {employee.address} <br />
                  <strong>Phone:</strong> {employee.phone}
                </Card.Text>
                <div className="employee-actions">
                  <Button variant="warning" className="me-2" onClick={() => selectEmployee(employee)}>
                    <FaEdit />
                  </Button>
                  <Button variant="danger" onClick={() => deleteEmployee(employee.id)}>
                    <FaTrash />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EmployeeList;
