"use client";
import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import { Container, Navbar } from "react-bootstrap";

function Header() {
  return (
    <header className="border-primary-808  py-1 text z-50 border-b border-primary-800 shadow-lg">
      <Navbar expand="md" className="bg-body-template" variant="dark">
        <Container fluid="md">
          <Logo />
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="outline-none border-0 shadow-none focus:ring-0 "
          >
            <span className="navbar-toggler-icon text-white hover:text-primary-500" />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end mt-3 md:mt-0"
          >
            <Navigation />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
