import React, { useState } from "react";
import useFileUpload from "../../../hooks/useUploadFile";
const PictureUpload = () => {
  const { file, handleFileChange, handleFormSubmit } = useFileUpload();

  return (
    <form onSubmit={handleFormSubmit} encType="multipart/form-data">
      <input type="file" name="file" onChange={handleFileChange} />
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default PictureUpload;
