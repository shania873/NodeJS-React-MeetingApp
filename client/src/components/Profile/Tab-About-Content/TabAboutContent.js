import React from "react";

const TabContent = () => {
  return (
    <>
      <div class="tab-content profile-tab" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div class="row">
            <div class="col-md-6">
              <label>User Id</label>
            </div>
            <div class="col-md-6">
              <p>Kshiti123</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label>Name</label>
            </div>
            <div class="col-md-6">
              <p>Kshiti Ghelani</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label>Email</label>
            </div>
            <div class="col-md-6">
              <p>kshitighelani@gmail.com</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label>Phone</label>
            </div>
            <div class="col-md-6">
              <p>123 456 7890</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label>Profession</label>
            </div>
            <div class="col-md-6">
              <p>Web Developer and Designer</p>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div class="row">
            <div class="col-md-6">
              <label>Experience</label>
            </div>
            <div class="col-md-6">
              <p>Expert</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label>Hourly Rate</label>
            </div>
            <div class="col-md-6">
              <p>10$/hr</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label>Total Projects</label>
            </div>
            <div class="col-md-6">
              <p>230</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label>English Level</label>
            </div>
            <div class="col-md-6">
              <p>Expert</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label>Availability</label>
            </div>
            <div class="col-md-6">
              <p>6 months</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <label>Your Bio</label>
              <br />
              <p>Your detail description</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabContent;
