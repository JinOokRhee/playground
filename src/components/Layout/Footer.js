import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

import SourceLink from 'components/SourceLink';

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          Welcome BO:M Project !!!! <SourceLink>HOME</SourceLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
