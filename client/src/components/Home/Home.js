import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Profile from "../Profile/Profile";

const Home = () => {
  useEffect(() => {});

  return (
    <div className="main-home">
      <Container className="container-home">
        <Row className="justify-content-center align-items-center">
          <Profile />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
