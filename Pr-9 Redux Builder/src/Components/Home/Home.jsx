import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteNote } from "../../Servise/action/noteAction";
import { MdDeleteSweep } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { TiEdit } from "react-icons/ti";
import './Home.css';

const Home = () => {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container fluid className="home-wrapper">
      <h2 className="home-header">My Notes</h2>
      <div className="notes-list">
        {notes.map((note) => (
          <Card key={note.id} className="note-item">
            <Card.Body className="note-item-body">
              <Card.Title className="note-item-title">{note.title}</Card.Title>
              <Card.Text className="note-item-content">{note.content}</Card.Text>
            </Card.Body>
            <div className="note-item-actions">
              <Button onClick={() => navigate(`/edit/${note.id}`)} className="edit-note-btn"><TiEdit /></Button>
              <Button onClick={() => dispatch(deleteNote(note.id))} className="delete-note-btn"><MdDeleteSweep /></Button>
            </div>
          </Card>
        ))}
      </div>
      <Button className="add-note-btn"  onClick={() => navigate("/add")} >
        <FiPlus />
      </Button>
    </Container>
  );
};

export default Home;
