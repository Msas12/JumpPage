import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavbarBrand() {
  return (

      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand href="#home">
              <img
                alt=""
                src="../imgs/Surpoint (3).png"
                width="200"
                height="150"
              />{''}
            </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default NavbarBrand;
