import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles.css";

const EditBook = ({ books, updateBook }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find book to edit
  const bookToEdit = books.find((book) => book.id === parseInt(id));

  // State for form fields
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [discount, setDiscount] = useState("");
  const [publicationDate, setPublicationDate] = useState("");

  // Prepopulate form with existing book data when the book is found
  useEffect(() => {
    if (bookToEdit) {
      setTitle(bookToEdit.title);
      setPrice(bookToEdit.price);
      setGenre(bookToEdit.genre);
      setDescription(bookToEdit.description);
      setAuthor(bookToEdit.author);
      setStock(bookToEdit.stock);
      setImage(bookToEdit.image);
      setDiscount(bookToEdit.discount);
      setPublicationDate(bookToEdit.publicationDate);
    }
  }, [bookToEdit]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = {
      title,
      price,
      genre,
      description,
      author,
      stock,
      image,
      discount,
      publicationDate,
    };
    updateBook(parseInt(id), updatedBook);
    navigate("/");
  };

  // If the book doesn't exist, display a "not found" message
  if (!bookToEdit) {
    return (
      <div className="container">
        <h2>Book not found!</h2>
        <p>The book you are trying to edit does not exist or has been removed.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Title</label>
          <input 
            type="text" 
            placeholder="Book Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Price ($)</label>
          <input 
            type="number" 
            placeholder="Price ($)" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Genre</label>
          <select 
            value={genre} 
            onChange={(e) => setGenre(e.target.value)} 
            required
          >
            <option value="" disabled>Select Genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Horror">Horror</option>
            <option value="Self-Help">Self-Help</option>
            <option value="Biography">Biography</option>
            <option value="History">History</option>
          </select>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea 
            placeholder="Brief description of the book" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Author</label>
          <input 
            type="text" 
            placeholder="Author Name" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Stock Quantity</label>
          <input 
            type="number" 
            placeholder="Stock Quantity" 
            value={stock} 
            onChange={(e) => setStock(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input 
            type="text" 
            placeholder="Image URL" 
            value={image} 
            onChange={(e) => setImage(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Discount (%)</label>
          <input 
            type="number" 
            placeholder="Discount (%)" 
            value={discount} 
            onChange={(e) => setDiscount(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Publication Date</label>
          <input 
            type="date" 
            placeholder="Publication Date" 
            value={publicationDate} 
            onChange={(e) => setPublicationDate(e.target.value)} 
            required 
          />
        </div>
        
        <button className="submit-btn">Update Book</button>
      </form>
    </div>
  );
};

export default EditBook;
