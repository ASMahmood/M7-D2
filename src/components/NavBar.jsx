import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar className="align-items-end">
        <Navbar.Brand href="#home">
          <img
            src="https://res.cloudinary.com/dhmw620tl/image/upload/v1611828821/benchmark3/k8cvl0kfh3bo1wul6nen.gif"
            className="navbarIcon mr-4"
            alt="icon"
          />
        </Navbar.Brand>
        <h3 className="logoTitle">Bluesuit Jobs</h3>
      </Navbar>
    );
  }
}
