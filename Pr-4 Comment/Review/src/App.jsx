import React, { useState } from "react";
import ReviewForm from "./Components/ReviewForm";  // Importing the review form component
import ReviewList from "./Components/ReviewList";  // Importing the review list component
import './App.css';  // Global styles

const App = () => {
  const [reviews, setReviews] = useState([]); // Store reviews
  const [showSidebar, setShowSidebar] = useState(false); // Toggle sidebar visibility

  // Add a new review to the reviews array
  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  // Toggle the sidebar view
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="app-container">
      {/* Form Container with static form */}
      <div className="form-container">
        <ReviewForm addReview={addReview} />
      </div>

      {/* Button to view all reviews */}
      <button className="view-reviews-btn" onClick={toggleSidebar}>
        View All Reviews
      </button>

      {/* Sidebar to display reviews */}
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
