import React, { useState } from "react";
import './ReviewFormStyles.css'; 

const ReviewForm = ({ addReview }) => {
  const [form, setForm] = useState({ username: "", review: "", rating: 0 });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!form.username.trim()) errors.username = "Username is required";
    if (!form.review.trim()) errors.review = "Review text is required";
    if (form.rating === 0) errors.rating = "Rating is required";
    return errors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (rating) => {
    setForm({ ...form, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      addReview(form);
      setForm({ username: "", review: "", rating: 0 });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="review-form-container">
      <h2 className="form-heading">Leave Your Review</h2> 
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        <div className="form-group">
          <label>Review:</label>
          <textarea
            name="review"
            value={form.review}
            onChange={handleChange}
            placeholder="Write your review here"
          />
          {errors.review && <p className="error">{errors.review}</p>}
        </div>

        <div className="form-group">
          <label>Rating:</label>
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRatingChange(star)}
                className={`cursor-pointer text-2xl ${form.rating >= star ? "text-yellow-500 selected" : "text-gray-300"}`}
              >
                ★
              </span>
            ))}
          </div>
          {errors.rating && <p className="error">{errors.rating}</p>}
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
