import { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateNote } from "../../Servise/action/noteAction";
import './EditNote.css';

const EditData = () => {
  const { id } = useParams();
  const notes = useSelector((state) => state.notes.notes);
  const noteToEdit = notes.find((note) => note.id === parseInt(id));

  const [title, setTitle] = useState(noteToEdit?.title || "");
  const [content, setContent] = useState(noteToEdit?.content || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateNote({ id: parseInt(id), title, content }));
    navigate("/");
  };

  return (
    <Container className="edit-note-container">
      <h2 className="edit-note-title">Edit Your Note</h2>
      <Form onSubmit={handleUpdate} className="edit-note-form">
        <Form.Group className="form-group">
          <Form.Label className="form-label">Title</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label className="form-label">Content</Form.Label>
          <Form.Control
            className="form-input"
            as="textarea"
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </Form.Group>

        <div className="form-actions">
          <Button variant="success" type="submit" className="form-btn update-btn">
            Update
          </Button>
          <Button
            variant="secondary"
            className="form-btn cancel-btn"
            onClick={() => navigate("/")}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default EditData;