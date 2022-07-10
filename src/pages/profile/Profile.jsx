import { useState } from "react";
import { ProfileDetails } from "../../components";
import "./profile.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <section class="main__container d-flex col xy-center mt-2 gap-2 ">
      <h1 className="txt-bold txt-xl">My Profile</h1>
      <div className="profile__container">
        <ul class="profile__navbar">
          <li class="p-sm active">Profile</li>
          <li class="p-sm">Address</li>
          <li class="p-sm">Orders</li>
        </ul>
        <div>{activeTab === "profile" && <ProfileDetails />}</div>
      </div>
    </section>
  );
};

export { Profile };
