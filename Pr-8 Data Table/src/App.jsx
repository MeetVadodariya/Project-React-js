import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import BookDetail from "./pages/BookDetail"; 
import ViewBooks from "./pages/ViewBooks"; // Import ViewBooks page
import "./styles.css";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  const saveToLocalStorage = (updatedBooks) => {
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  const addBook = (book) => {
    const updatedBooks = [...books, { id: Date.now(), ...book }];
    setBooks(updatedBooks);
    saveToLocalStorage(updatedBooks);
  };

  const updateBook = (id, updatedBook) => {
    const updatedBooks = books.map((b) =>
      b.id === id ? { ...b, ...updatedBook } : b
    );
    setBooks(updatedBooks);
    saveToLocalStorage(updatedBooks);
  };

  const deleteBook = (id) => {
    const updatedBooks = books.filter((b) => b.id !== id);
    setBooks(updatedBooks);
    saveToLocalStorage(updatedBooks);
  };
  const handleSearch = (query) => {
    setFilteredBooks(books.filter(book => book.title.toLowerCase().includes(query.toLowerCase())));
  };
  
  <Header onSearch={handleSearch} />;
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home books={books} deleteBook={deleteBook} />} />
        <Route path="/add" element={<AddBook addBook={addBook} />} />
        <Route path="/edit/:id" element={<EditBook books={books} updateBook={updateBook} />} />
        <Route path="/book/:id" element={<BookDetail books={books} />} />
        <Route path="/view-all" element={<ViewBooks books={books} />} /> {/* View All Books Route */}
      </Routes>
    </Router>
  );
};

export default App;
