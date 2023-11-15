import React from "react";
import PictureUpload from "./Picture-Upload/Picture-Upload";
import HeaderProfile from "./Header-Profile/HeaderProfile";
import TabContent from "./Tab-About-Content/TabAboutContent";
import TagsProfile from "./Tags-Profile/TagsProfile";
const Profile = () => {
  return (
    <>
      <div class=" emp-profile">
        <form method="post">
          <div class="row">
            <div class="col-md-4">
              <PictureUpload />
            </div>
            <div class="col-md-6">
              <HeaderProfile></HeaderProfile>
            </div>
            <div class="col-md-2">
              <input
                type="submit"
                class="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <TagsProfile />
            </div>
            <div class="col-md-8">
              <TabContent />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
