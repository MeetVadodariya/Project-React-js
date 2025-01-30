import React from "react";
import './ReviewListStyles.css';

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to leave one!</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3 className="review-username">{review.username}</h3>
            <div className="star-rating">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i}>{i < review.rating ? "★" : "☆"}</span>
              ))}
            </div>
            <p>{review.review}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewList;
