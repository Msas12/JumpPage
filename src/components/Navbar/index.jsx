import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavbarBrand() {
  return (

      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-left">
          <Navbar.Brand href="#home">
              <img
                alt=""
                src="../imgs/surpoint2.svg"
                width="100"
                height="100"
              />{''}
            </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default NavbarBrand;
