import React from "react";
import { Container, Navbar } from "react-bootstrap";
import './Header.css';


const Header = () => {
  return (
    <Navbar className="custom-header" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="custom-brand">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.O_BEi15EGH4F2vCLcTVFwwHaKI&pid=Api&P=0&h=180"
            alt="Keep Logo"
            className="custom-logo" />
          Google Keep
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
