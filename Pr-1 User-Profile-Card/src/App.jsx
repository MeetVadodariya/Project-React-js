import React from "react";
import UserProfileCard from "./Components/UserProfileCard";

const App = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif"}}>
      <h1 style={{textDecoration: "underline"}}>User Profile Cards</h1>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <UserProfileCard
          name="Alice Johnson"
          email="alice.johnson@example.com"
          profilePic="https://img.freepik.com/premium-photo/handsome-businessman-holding-smartphone-leaning-bookcase-headquarters_156252-2108.jpg?ga=GA1.1.804635141.1734153030&semt=ais_hybrid"
          phone="987-123-4567"
          address="123 Elm Street, Springfield"
          age="25"
          company="Creative Minds LLC"
          website="https://creativeminds.com"
          bio="A dynamic UX designer who believes in creating intuitive user experiences."
        />
        <UserProfileCard
          name="Michael Carter"
          email="michael.carter@example.com"
          profilePic="https://img.freepik.com/free-photo/content-successful-male-manager-using-tablet-looking-camera_1262-14194.jpg?ga=GA1.1.804635141.1734153030&semt=ais_hybrid"
          phone="654-321-0987"
          address="789 Pine Road, Maple Town"
          age="32"
          company="Innovatech Solutions"
          website="https://innovatech.com"
          bio="A visionary tech entrepreneur shaping the future of AI."
        />
        <UserProfileCard
          name="Sophia Taylor"
          email="sophia.taylor@example.com"
          profilePic="https://img.freepik.com/free-photo/young-business-woman-holding-clipboard_114579-47000.jpg?ga=GA1.1.804635141.1734153030&semt=ais_hybrid"
          phone="555-567-1234"
          address="456 Birch Avenue, Willow Creek"
          age="29"
          company="Green Earth Corp."
          website="https://greenearth.com"
          bio="An environmental scientist working on sustainable innovations."
        />
        <UserProfileCard
          name="David Brown"
          email="david.brown@example.com"
          profilePic="https://img.freepik.com/free-photo/medium-shot-smiley-man-looking-tablet_23-2148230835.jpg?ga=GA1.1.804635141.1734153030&semt=ais_hybrid"
          phone="444-222-1111"
          address="321 Oak Drive, Cedar City"
          age="40"
          company="BuildRight Constructions"
          website="https://buildright.com"
          bio="A seasoned architect passionate about designing modern, eco-friendly homes."
        />
        <UserProfileCard
          name="Emma Davis"
          email="emma.davis@example.com"
          profilePic="https://img.freepik.com/free-photo/portrait-female-lawyer-formal-suit-with-clipboard_23-2148915794.jpg?ga=GA1.1.804635141.1734153030&semt=ais_hybrid"
          phone="777-888-9999"
          address="101 Maple Lane, Forest Hill"
          age="27"
          company="Bright Future Academy"
          website="https://brightfuture.com"
          bio="An inspiring teacher dedicated to nurturing young minds."
        />
        <UserProfileCard
          name="John Miller"
          email="john.miller@example.com"
          profilePic="https://img.freepik.com/free-photo/content-business-leader-holding-smartphone-cup_1262-4918.jpg?ga=GA1.1.804635141.1734153030&semt=ais_hybrid"
          phone="123-456-7890"
          address="654 Cherry Street, Pleasantville"
          age="36"
          company="HealthFirst Wellness"
          website="https://healthfirst.com"
          bio="A fitness coach helping people achieve their health goals."
        />
      </div>
    </div>
  );
};

export default App;
