import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Home = ({ books, deleteBook }) => {
  return (
    <div className="container">
      <h2 className="section-title">Bookstore</h2>
      <div className="book-grid">
        {books.length === 0 ? (
          <p className="empty-message">No books available. Add some!</p>
        ) : (
          books.map((book) => (
            <div className="book-card" key={book.id}>
              <img src={book.image} alt={book.title} className="book-image" />
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">By <strong>{book.author}</strong></p>
                <p className="book-price">
                  <span className="discount-price">
                    ${(book.price - (book.price * book.discount) / 100).toFixed(2)}
                  </span>
                  <span className="original-price">${book.price}</span>
                  <span className="discount">{book.discount}% OFF</span>
                </p>
                <p className="book-genre">Genre: {book.genre}</p>
                <p className={`book-stock ${book.stock > 0 ? "in-stock" : "out-of-stock"}`}>
                  {book.stock > 0 ? "In Stock" : "Out of Stock"}
                </p>
                <p className="book-description">
                  {book.description.length > 100
                    ? book.description.slice(0, 100) + "..."
                    : book.description}
                </p>
                <div className="book-actions">
                  <Link to={`/book/${book.id}`} className="btn view-btn">View</Link>
                  <Link to={`/edit/${book.id}`} className="btn edit-btn">Edit</Link>
                  <button onClick={() => deleteBook(book.id)} className="btn delete-btn">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
