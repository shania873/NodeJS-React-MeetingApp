import React, { useState } from "react";
import useFileUpload from "../../../hooks/useUploadFile";
const HeaderProfile = () => {
  const { file, handleFileChange, handleFormSubmit } = useFileUpload();

  return (
    <>
      <div class="profile-head">
        <h5>Kshiti Ghelani</h5>
        <h6>Web Developer and Designer</h6>
        <p class="proile-rating">
          RANKINGS : <span>8/10</span>
        </p>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              About
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Timeline
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderProfile;
