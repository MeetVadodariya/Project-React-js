import React, { useState } from "react";
import { Nav, Container, Dropdown, Row, Col, ListGroup } from "react-bootstrap";
import { RiArrowDropDownLine, RiMenu2Line, RiPhoneLine } from "react-icons/ri";
import "./MenuList.css";

const MainMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Dairy & Bakery");
  const [openDropdown, setOpenDropdown] = useState(null);
  
  const categories = [
    {
      name: "Dairy & Bakery",
      subcategories: {
        Dairy: [
          "Milk",
          "Ice Cream",
          "Cheese",
          "Frozen Custard",
          "Frozen Yogurt",
        ],
        Bakery: [
          "Cake And Pastry",
          "Rusk Toast",
          "Bread & Buns",
          "Chocolate Brownie",
          "Cream Roll",
        ],
      },
    },
    {
      name: "Fruits & Vegetable",
      subcategories: {
        Fruits: ["Apple", "Banana", "Mango", "Grapes"],
        Vegetables: ["Carrot", "Tomato", "Spinach", "Potato"],
      },
    },
    {
      name: "Snack & Spice",
      subcategories: {
        Snacks: ["Chips", "Cookies", "Nuts"],
        Spices: ["Turmeric", "Pepper", "Cumin"],
      },
    },
    {
      name: "Juice & Drinks",
      subcategories: { Drinks: ["Orange Juice", "Apple Juice", "Lemonade"] },
    },
    { name: "View All", subcategories: {} },
  ];

  return (
    <Container className="menu-container d-flex justify-content-between align-items-center mb-2">
      <Row className="w-100 align-items-center">
        {/* Left Section: Category Dropdown */}
        <Col md="auto">
          <Dropdown
            className="menu-dropdown d-inline-block"
            onMouseEnter={() => setOpenDropdown("category")}
            onMouseLeave={() => setOpenDropdown(null)}
            show={openDropdown === "category"}
          >
            <Dropdown
              variant="light"
              className="menu-toggle border px-3 py-2 rounded d-flex align-items-center"
            >
              <RiMenu2Line size={20}  />
            </Dropdown>

            <Dropdown.Menu
              className="menu-dropdown-menu p-3"
              style={{ width: "450px", minHeight: "280px" }}
            >
              <Row>
                <Col md={4}>
                  <ListGroup>
                    {categories.map((category) => (
                      <ListGroup.Item
                        key={category.name}
                        action
                        className={`border-0 ${
                          selectedCategory === category.name
                            ? "text-success fw-bold border border-success"
                            : ""
                        }`}
                        onClick={() => setSelectedCategory(category.name)}
                      >
                        {category.name}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>

                <Col md={8}>
                  {categories
                    .filter((category) => category.name === selectedCategory)
                    .map((category) => (
                      <div key={category.name} className="submenu-container d-flex gap-4">
                        {Object.keys(category.subcategories).map(
                          (subcategory) => (
                            <div key={subcategory} className="submenu-section">
                              <h6 className="submenu-title text-success fw-bold">
                                {subcategory}
                              </h6>
                              <ul className="submenu-list list-unstyled">
                                {category.subcategories[subcategory].map(
                                  (item) => (
                                    <li key={item} className="submenu-item text-muted">
                                      {item}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    ))}
                </Col>
              </Row>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        {/* Center Section: Navigation Links */}
        <Col>
          <Nav className="menu-nav navbar navbar-expand-lg px-4 justify-content-center">
          <Nav.Link href="/">Home</Nav.Link>
          <Dropdown
            onMouseEnter={() => setOpenDropdown("categoryMenu")}
            onMouseLeave={() => setOpenDropdown(null)}
            show={openDropdown === "categoryMenu"}
          >
            <Dropdown variant="link" className="nav-link">
              Category<RiArrowDropDownLine  className="fs-5"/>
            </Dropdown>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Shop Left sidebar</Dropdown.Item>
              <Dropdown.Item href="#">Shop Right sidebar</Dropdown.Item>
              <Dropdown.Item href="#">Full Width</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown
            onMouseEnter={() => setOpenDropdown("productsMenu")}
            onMouseLeave={() => setOpenDropdown(null)}
            show={openDropdown === "productsMenu"}
          >
            <Dropdown variant="link" className="nav-link">
              Products<RiArrowDropDownLine  className="fs-5"/>
            </Dropdown>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Product Left sidebar</Dropdown.Item>
              <Dropdown.Item href="#">Product Right sidebar</Dropdown.Item>
              <Dropdown.Item href="#">Product Full sidebar</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown
            onMouseEnter={() => setOpenDropdown("pagesMenu")}
            onMouseLeave={() => setOpenDropdown(null)}
            show={openDropdown === "pagesMenu"}
          >
            <Dropdown variant="link" className="nav-link">
              Pages<RiArrowDropDownLine  className="fs-5"/>
            </Dropdown>
            <Dropdown.Menu>
              <Dropdown.Item href="#">About Us</Dropdown.Item>
              <Dropdown.Item href="#">Contact Us</Dropdown.Item>
              <Dropdown.Item href="#">Cart</Dropdown.Item>
              <Dropdown.Item href="#">Checkout</Dropdown.Item>
              <Dropdown.Item href="#">Track Order</Dropdown.Item>
              <Dropdown.Item href="#">Wishlist</Dropdown.Item>
              <Dropdown.Item href="#">Faq</Dropdown.Item>
              <Dropdown.Item href="#">Login</Dropdown.Item>
              <Dropdown.Item href="#">Register</Dropdown.Item>
              <Dropdown.Item href="#">Policy</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown
            onMouseEnter={() => setOpenDropdown("blogMenu")}
            onMouseLeave={() => setOpenDropdown(null)}
            show={openDropdown === "blogMenu"}
          >
            <Dropdown variant="link" className="nav-link">
              Blog<RiArrowDropDownLine  className="fs-5"/>
            </Dropdown>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Left Sidebar</Dropdown.Item>
              <Dropdown.Item href="#">Right Sidebar</Dropdown.Item>
              <Dropdown.Item href="#">Full Width</Dropdown.Item>
              <Dropdown.Item href="#">Detail Left Sidebar</Dropdown.Item>
              <Dropdown.Item href="#">Detail Right Sidebar</Dropdown.Item>
              <Dropdown.Item href="#">Detail Full Width</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown
            onMouseEnter={() => setOpenDropdown("elementsMenu")}
            onMouseLeave={() => setOpenDropdown(null)}
            show={openDropdown === "elementsMenu"}
          >
            <Dropdown variant="link" className="nav-link">
              Elements<RiArrowDropDownLine  className="fs-5"/>
            </Dropdown>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Products</Dropdown.Item>
              <Dropdown.Item href="#">Typography</Dropdown.Item>
              <Dropdown.Item href="#">Buttons</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Nav>
        </Col>

        {/* Right Section: Contact Info */}
        <Col md="auto">
          <div className="menu-contact d-flex align-items-center">
            <RiPhoneLine className="me-2" /> +123 (456) (7890)
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainMenu;
