import React, { useState } from "react";
import {
  Form,
  FormControl,
  Button,
  InputGroup,
  Dropdown,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import {
  RiHeart3Line,
  RiShoppingCartLine,
  RiUser3Line,
  RiMessage3Line,
} from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [category, setCategory] = useState("All Categories");
  const [comment, setComment] = useState("Select Comment");
  const [newDropdown, setNewDropdown] = useState("Select Option");

  return (
    <Container className="header-wrapper">
      <Row className="d-flex flex-wrap">
        <Col sm="12">
          <div className="header-top d-flex justify-content-between align-items-center">
            {/* Logo */}
            <a href="#" className="header-logo">
              <img
                src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png"
                alt="Logo"
                className="logo-img"
              />
            </a>

            {/* Search Bar */}
            <Form className="header-search mx-3">
              <InputGroup className="search-group">
                <FormControl
                  type="text"
                  placeholder="Search For items..."
                  className="border-0 shadow-none ps-3 flex-grow-1"
                />
                
                <Dropdown onSelect={(eventKey) => setCategory(eventKey)}>
                  <Dropdown.Toggle variant="light" className="search-category-toggle">
                    {category} <span className="dropdown-icon"></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="All Categories">All Categories</Dropdown.Item>
                    <Dropdown.Item eventKey="Electronics">Electronics</Dropdown.Item>
                    <Dropdown.Item eventKey="Fashion">Fashion</Dropdown.Item>
                    <Dropdown.Item eventKey="Books">Books</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Button variant="success" className="search-btn">
                  <FaSearch />
                </Button>
              </InputGroup>
            </Form>

            {/* User Options */}
            <div className="header-user-options d-flex gap-4">
              <a href="/account" className="user-option-item">
                <RiUser3Line />
                <span> Account</span>
              </a>
              <a href="/wishlist" className="user-option-item">
                <RiHeart3Line />
                <span> Wishlist</span>
              </a>
              <a href="/cart" className="user-option-item">
                <RiShoppingCartLine />
                <span> Cart</span>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
