import React, { useState } from "react";
import logo from "../../assets/images/kuizu-logo.png";
import { CircleImage, UserImage } from "../../components";
import SideBar from "../side-bar/SideBar";
import "./navbar.css";

const Navbar = ({user}) => {

  const [isActive, setIsActive] = useState(false);
  const [showX, setShowX] = useState(true)

  function handleClick(e) {
    e.preventDefault();
    setIsActive((current) => !current);
  }

  function hideX() {
    setShowX((current) => !current)
  }

  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="User image icon" />
      <div className="navbar__menu-buttons">
        <div className={isActive ? "navbar__menu-buttons-user hide" : "navbar__menu-buttons-user"}>
          <h2 className="navbar-username">
            {user.firstname} {user.lastname != null ? user.lastname : ""}
          </h2>
          <CircleImage image={user.imgurl} width="50px" height="50px" />
        </div>
        <div
          className={isActive ? "menu-button active" : "menu-button"}
        >
          {showX ? <div className="menu-button-line" onClick={(e) => handleClick(e)}></div> : <div></div>}
          
          <SideBar
            classText={isActive ? "side-bar active" : "side-bar"}
            user_img={user.imgurl}
            firstname={user.firstname}
            lastname={user.lastname}
            rol={user.type}
            hide={hideX}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
