import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    function goToLink(e) {
      console.log('Shit was clicked');
      window.open(e.currentTarget.getAttribute('href'));
    }

    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">#GETMCNASTY</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem onClick={goToLink} href="http://www.excellenceresorts.com/resorts/excellence-playa-mujeres/">
              Resort
            </NavItem>
            <NavItem onClick={goToLink} href="https://www.destinationweddings.com/Weddings/Guests/AttendaWedding.aspx">
              Destination Weddings
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
