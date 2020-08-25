import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'
import { Row, Col, Image } from 'react-bootstrap'
import profileImage from './images/profile.jpg'
import { Route } from "react-router";
import Home from './Home/Home'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand >
          <Row>
            <Col xs={2} md={1}>
              <Image src={profileImage} roundedCircle width={30} height={30}/>
            </Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link componemt={Home}>Home</Nav.Link>
            <Nav.Link href="#link">Portifolio</Nav.Link>
            <Nav.Link href="#link">About Me</Nav.Link>
            <Nav.Link href="#link">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
