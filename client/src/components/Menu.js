import React, { useEffect } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import useLogout from "../hooks/useLogout";

const Menu = () => {
  const logout = useLogout();
  const signOut = async () => {
    await logout();
    // navigate("/connect");
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        style={{ backgroundColor: "#af3636" }}
        expand="xl"
        className="mb-3 menu-metis"
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <span className="text-uppercase text-white">MeetingMap</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/ListedeCours">Mes Cours</Nav.Link>

              <Dropdown align={{ xxl: "end" }}>
                <Dropdown.Toggle
                  style={{
                    backgroundColor: "transparent",
                    border: "transparent",
                  }}
                >
                  Mon profil
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {/* <Dropdown.Item href="/edit-profile">
                    Editer le profil
                  </Dropdown.Item>
                  <Dropdown.Item href="/edit-password">
                    Editer le mot de passe
                  </Dropdown.Item> */}
                  <Dropdown.Item onClick={(e) => signOut(e)}>
                    Déconnexion <FontAwesomeIcon icon={faSignOut} />{" "}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
