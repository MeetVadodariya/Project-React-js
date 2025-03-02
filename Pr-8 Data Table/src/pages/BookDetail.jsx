import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa"; // Close icon
import "../styles.css";

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <h2 className="not-found">Book not found!</h2>;
  }

  return (
    <div className="book-detail-container">
      {/* Cancel Icon on the Top-Right */}
      <Link to="/" className="cancel-icon">
        <FaTimes />
      </Link>

      {/* Left Section: Book Image */}
      <div className="book-detail-left">
        <img src={book.image} alt={book.title} className="book-detail-image" />
      </div>

      {/* Right Section: Book Details */}
      <div className="book-detail-right">
        <h1 className="book-title">{book.title}</h1>
        <p className="book-author">by <strong>{book.author}</strong></p>

        <div className="book-rating">
          ⭐⭐⭐⭐⭐ <span className="rating-count">(120 ratings)</span>
        </div>

        <div className="book-price-section">
          <span className="discount-price">
            ${(book.price - (book.price * book.discount) / 100).toFixed(2)}
          </span>
          <span className="original-price">${book.price}</span>
          <span className="discount">{book.discount}% OFF</span>
        </div>

        <p className="book-stock">
          <strong>Availability:</strong> 
          <span className={book.stock > 0 ? "in-stock" : "out-of-stock"}>
            {book.stock > 0 ? " In Stock" : " Out of Stock"}
          </span>
        </p>

        <p className="book-genre"><strong>Genre:</strong> {book.genre}</p>
        <p className="book-publication-date">
          <strong>Publication Date:</strong> {book.publicationDate}
        </p>

        <p className="book-description"><strong>Description:</strong> {book.description}</p>

        {/* Buy & Cart Buttons */}
        <div className="book-actions">
          <button className="amazon-buy-btn">Buy Now</button>
          <button className="amazon-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
