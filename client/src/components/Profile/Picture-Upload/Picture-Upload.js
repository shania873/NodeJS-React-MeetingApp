import React, { useState } from "react";
import useFileUpload from "../../../hooks/useUploadFile";
const PictureUpload = () => {
  const { file, handleFileChange, handleFormSubmit } = useFileUpload();

  return (
    <>
      <div class="profile-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
          alt=""
        />
        <form
          onSubmit={handleFormSubmit}
          encType="multipart/form-data"
          className="file btn btn-lg btn-primary"
        >
          <input type="file" name="file" onChange={handleFileChange} />
          <button type="submit">Change Photo</button>
        </form>
      </div>
    </>
  );
};

export default PictureUpload;
