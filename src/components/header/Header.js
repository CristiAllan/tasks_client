import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavbarBrand from "react-bootstrap/NavbarBrand";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <NavbarBrand>
            <FontAwesomeIcon icon='check-circle' size='2x' /> Task Finisher
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default Header;
