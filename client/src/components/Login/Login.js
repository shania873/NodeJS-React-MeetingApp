import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Container from "react-bootstrap/Container";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AuthContext from "../../context/AuthProvider";

const Login = () => {
  const navigate = useNavigate();

  const [email, setUser] = useState("");
  const [password, setPwd] = useState("");

  let context = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_URL}/admin/setLogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
      credentials: "include",
    })
      .then((response) => {
        localStorage.setItem("isAuthenticated", true);
        window.location.href = `${process.env.REACT_APP_URL_DEV}/Home`;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="container-login row m-0 p-0" fluid>
      <Col
        sm={6}
        className=" column-title  d-flex justify-content-center align-items-center"
      >
        <h1>
          Meeting App <FontAwesomeIcon icon={faHeart} />
        </h1>
      </Col>

      <Col
        sm={6}
        className="column-content  d-flex justify-content-center align-items-center"
      >
        <Form onSubmit={handleSubmit} className="form-login">
          <Form.Group className="mb-2">
            <Form.Control
              type="email"
              placeholder="Tapez votre utilisateur"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={email}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="password"
              className="uk-input mb-4"
              id="password"
              placeholder="Tapez votre mot de passe"
              onChange={(e) => setPwd(e.target.value)}
              value={password}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="f-left">
            Envoyer
          </Button>
        </Form>
      </Col>
    </Container>
  );
};

export default Login;
