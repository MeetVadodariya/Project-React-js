import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const categories = [
  { 
    name: "Kilos", 
    img: "https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100", 
    hasDropdown: true, 
    products: ["Product 1", "Product 2", "Product 3"]
  },
  { 
    name: "Mobiles", 
    img: "https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100", 
    products: ["Mobile 1", "Mobile 2", "Mobile 3"]
  },
  { 
    name: "Fashion", 
    img: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100", 
    hasDropdown: true, 
    products: ["Shirt", "Jeans", "Jacket"]
  },
  { 
    name: "Electronics", 
    img: "https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100", 
    hasDropdown: true, 
    products: ["Laptop", "Camera", "Smartwatch"]
  },
  { 
    name: "Home & Furniture", 
    img: "https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100", 
    hasDropdown: true, 
    products: ["Sofa", "Table", "Chair"]
  },
  { 
    name: "Appliances", 
    img: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100", 
    products: ["Washing Machine", "Refrigerator", "Microwave"]
  },
  { 
    name: "Flight Bookings", 
    img: "https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100", 
    products: ["Flight 1", "Flight 2", "Flight 3"]
  },
  { 
    name: "Beauty, Toys & More", 
    img: "https://rukminim1.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100", 
    hasDropdown: true, 
    products: ["Toy 1", "Cosmetic 1", "Toy 2"]
  },
  { 
    name: "Two Wheelers", 
    img: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100", 
    hasDropdown: false, 
    products: ["Bike 1", "Bike 2", "Bike 3"]
  }
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // const handleCategoryClick = (category) => {
  //   setSelectedCategory(selectedCategory === category ? null : category);
  // };

  return (
    <div className="categories-container">
      <div className="category-list">
        {categories.map((cat, index) => (
          <div 
            className={`category-item ${cat.hasDropdown ? "has-dropdown" : ""}`}
            key={index}
            onClick={() => handleCategoryClick(cat)}
          >
            <img src={cat.img} alt={cat.name} className="category-icon" />
            <span className="category-text">{cat.name}</span>
            {cat.hasDropdown && <span className="dropdown-icon"><FaAngleDown /></span>}
            {cat.hasDropdown && (
              <div className="dropdown-menu">
                <ul>
                  {cat.products.map((product, i) => (
                    <li key={i}>{product}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className="category-products">
          <h3>Products in {selectedCategory.name} category</h3>
          <ul>
            {selectedCategory.products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Categories;
