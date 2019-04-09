import React from 'react';
// import { FormattedMessage } from 'react-intl';
import Navbar from 'react-bootstrap/Navbar';


/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Yandex Disk WebUI</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
