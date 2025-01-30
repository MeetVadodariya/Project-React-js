import React, { useState } from "react";
import ReviewForm from "./Components/ReviewForm";
import ReviewList from "./Components/ReviewList";
import './App.css';

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <ReviewForm addReview={addReview} />
      </div>

      <button className="view-reviews-btn" onClick={toggleSidebar}>
        View All Reviews
      </button>

      {showSidebar && (
        <div className="sidebar">
          <div className="sidebar-content">
            <h2>All Reviews</h2>
            <ReviewList reviews={reviews} />
            <button className="close-sidebar-btn" onClick={toggleSidebar}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
