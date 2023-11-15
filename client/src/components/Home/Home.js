import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AddLessons from "./Form/Add-Lessons";

const Home = () => {
  useEffect(() => {});

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/uploadMedias`,
        {
          credentials: "include",
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Erreur lors de l'envoi du fichier :", error);
    }
  };
  return (
    <div className="main-home">
      <Container className="container-home">
        <Row className="justify-content-center align-items-center">
          <form onSubmit={handleFormSubmit} encType="multipart/form-data">
            <input type="file" name="file" onChange={handleFileChange} />
            <button type="submit">Envoyer</button>
          </form>
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
