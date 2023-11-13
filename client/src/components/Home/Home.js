import React, { useState, useEffect, useRef, useContext } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AddLessons from "./Form/Add-Lessons";

const Home = () => {
  console.log(process.env);
  return (
    <div className="main-home">
      <Container className="container-home">
        <Row className="justify-content-center align-items-center">
          {/* <Col sm={6} xs={12} className="text-align-left">
            <h3>Bienvenue chez sportyApp !</h3>Rajoutez votre cours ici
          </Col>
          <Col sm={6} xs={12}>
            <AddLessons />
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
