import React from "react";
import "./UserProfileCard.css";

const UserProfileCard = ({
  name,
  email,
  profilePic,
  phone,
  address,
  age,
  company,
  website,
  bio,
}) => {
  return (
    <div className="detailed-card">
      <img src={profilePic} alt={`${name}'s Profile`} className="detailed-card-image" />
      <div className="detailed-card-content">
        <h2 className="detailed-card-title" style={{textDecoration: "underline"}}>{name}</h2>
        <p className="detailed-card-email">{email}</p>
        <p className="detailed-card-bio">{bio}</p>
        <div className="detailed-card-info">
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>Address:</strong> {address}
          </p>
          <p>
            <strong>Age:</strong> {age}
          </p>
          <p>
            <strong>Company:</strong> {company}
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a href={website} target="_blank" rel="noopener noreferrer">
              {website}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
