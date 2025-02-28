"use client";
import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import { Container, Navbar } from "react-bootstrap";

function Header() {
  return (
    <header className="border-primary-808 py-8 text z-50">
      <Navbar className="bg-body-template ">
        <Container fluid="md">
          <Logo />
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navigation />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
