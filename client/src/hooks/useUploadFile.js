import axios from "axios";
import React, { useState } from "react";
const useFileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("file", file);

    if (file) {
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
      } catch (error) {
        console.error("Erreur lors de l'envoi du fichier :", error);
      }
    } else {
      console.error("Aucun fichier sélectionné");
    }
  };

  return {
    file,
    handleFileChange,
    handleFormSubmit,
  };
};

export default useFileUpload;
