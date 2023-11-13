import React, { useContext, useDebugValue } from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section>
      <h1>Non autorisé</h1>
      <br />
      <p>Vous n'avez pas accès a cette page</p>
      <div className="flexGrow">
        <button onClick={goBack}>Revenir en arrière</button>
      </div>
    </section>
  );
};

export default Unauthorized;
