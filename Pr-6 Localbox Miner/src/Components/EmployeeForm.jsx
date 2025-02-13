import { useState, useEffect } from "react";
import { Button, Card, Col, Container, Form } from "react-bootstrap";
import "../styles/styles.css"; 

const EmployeeForm = ({ addEmployee, editEmployee, selectedEmployee }) => {
  const initialEmployee = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    image: null,
  };

  const [inputForm, setInputForm] = useState(initialEmployee);
  const [isEdit, setIsEdit] = useState(false);
  const [errors, setErrors] = useState({}); 

  useEffect(() => {
    if (selectedEmployee) {
      setInputForm(selectedEmployee);
      setIsEdit(true);
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });

    if (name === "email") validateEmail(value);
    if (name === "phone") validatePhone(value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setInputForm({ ...inputForm, image: file });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrors((prev) => ({
      ...prev,
      email: emailRegex.test(email) ? "" : "Invalid email format",
    }));
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    setErrors((prev) => ({
      ...prev,
      phone: phoneRegex.test(phone) ? "" : "Phone must be exactly 10 digits",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    validateEmail(inputForm.email);
    validatePhone(inputForm.phone);

    if (!inputForm.email || errors.email || !inputForm.phone || errors.phone) {
      alert("Please fix validation errors before submitting.");
      return;
    }

    if (isEdit) {
      editEmployee(inputForm);
      setIsEdit(false);
    } else {
      addEmployee({ ...inputForm, id: Date.now() });
    }
    setInputForm(initialEmployee);
    setErrors({});
  };

  return (
    <Container className="center-form">
      <Card className="form-card">
        <Card.Body>
          <h2 className="text-center">{isEdit ? "Edit" : "Add"} Employee</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={inputForm.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={inputForm.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Email with validation */}
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={inputForm.email}
                onChange={handleChange}
                required
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                name="address"
                value={inputForm.address}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Phone with validation */}
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone Number"
                name="phone"
                value={inputForm.phone}
                onChange={handleChange}
                required
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              {isEdit ? "Update" : "Add"} Employee
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EmployeeForm;
