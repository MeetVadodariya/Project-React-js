import { useState } from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote } from "../../Servise/action/noteAction";
import './AddData.css';


const AddData = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setErrorMessage("Both Title and Content must be filled in!");
      return;
    }
    setErrorMessage("");
    dispatch(addNote({ id: Date.now(), title, content }));
    navigate("/");
  };

  return (
    <Container className="add-note-container">
      <h2 className="add-note-header">Create a New Note</h2>
      {errorMessage && <Alert variant="danger" className="error-message">{errorMessage}</Alert>}

      <Form onSubmit={handleSubmit} className="add-note-form">
        <Form.Group className="form-group">
          <Form.Control
            className="input-field"
            type="text"
            placeholder="Enter Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Control
            className="input-field"
            as="textarea"
            rows={5}
            placeholder="Enter Note Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>

        <div className="form-actions">
          <Button type="submit" variant="success" className="submit-button">
            Add Note
          </Button>

          <Button
            variant="secondary"
            className="cancel-button"
            onClick={() => navigate("/")}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddData;
