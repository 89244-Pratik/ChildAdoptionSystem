import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navbar.css'; // Import your custom CSS

const AppNavbar = () => {
  return (
    <Navbar expand="md" className="custom-navbar shadow-sm">
      <Container>
        {/* Logo + Brand Name */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fmiddle%2F0-3253_heart-icon-red-hollow-valentine-svg-transparent-background.png&f=1&nofb=1&ipt=e50260949e3c93e973ab2217eb9d056d18e5ec3838ce7d4a65de5b6c356c0a8b"
            alt="AdoptCare Logo"
            width="30"
            height="30"
            className="me-2"
          />
          <b className="text-black">AdoptCare</b>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center">
            <LinkContainer to="/home">
              <Nav.Link className="nav-link-custom"><b>Home</b></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="nav-link-custom"><b>About</b></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Process">
              <Nav.Link className="nav-link-custom"><b>Process</b></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/orphanages">
              <Nav.Link className="nav-link-custom"><b>Orphanages</b></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/children">
              <Nav.Link className="nav-link-custom"><b>Childrens</b></Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav className="ms-auto">
            <LinkContainer to="/signup">
              <Nav.Link className="nav-link-custom"><b>SignUp</b></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signin">
              <Nav.Link className="nav-link-custom"><b>SignIn</b></Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
