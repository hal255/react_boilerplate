// NavBar is the navigation bar

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function MyNavBar() {
  let id = "my-nav-bar";
  let helper = navbar_helper();
  return (
    <div id={id}>
      {helper}
    </div>
  );
}

// TODO: Dynamically reference all texts
function navbar_helper() {
  return (
    <>
      <Navbar bg="" variant="light">
        <Navbar.Brand href="#home">ART OF ELAINE HO</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/about">ABOUT</Nav.Link>
          <Nav.Link href="/projects">PROJECTS</Nav.Link>
          <Nav.Link href="/shop">SHOP</Nav.Link>
          <Nav.Link href="/patreon">PATREON</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
export default MyNavBar;