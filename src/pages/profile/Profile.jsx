import { useState } from "react";
import { ProfileDetails, AddressManagement } from "../../components";
import "./profile.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="main__container d-flex col xy-center mt-2 gap-2 ">
      <h1 className="txt-bold txt-xl">My Profile</h1>
      <div className="profile__container">
        <ul className="profile__navbar">
          <li
            className={`p-sm ${activeTab === 0 ? "active" : ""}`}
            onClick={() => setActiveTab(0)}
          >
            Profile
          </li>
          <li
            className={`p-sm ${activeTab === 1 ? "active" : ""}`}
            onClick={() => setActiveTab(1)}
          >
            Address
          </li>
          <li
            className={`p-sm ${activeTab === 2 ? "active" : ""}`}
            onClick={() => setActiveTab(2)}
          >
            Orders
          </li>
        </ul>
        <div>{activeTab === 0 && <ProfileDetails />}</div>
        <div>{activeTab === 1 && <AddressManagement />}</div>
      </div>
    </section>
  );
};

export { Profile };
