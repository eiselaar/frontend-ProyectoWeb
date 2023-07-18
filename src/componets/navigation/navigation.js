import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../button/button";
import userIcon from "../../assets/icon/user.png"
import "./navigation.scss";

const Navigation = ({ appName, userName, role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="navigation">
    <div className="navigation__   brand">
    <Link to="/" className="navigation__brand-link">{appName}</Link>
    </div>
    <div className="navigation__user">
      <img src={userIcon} alt="User Icon" className="navigation__user-icon" />
      <div className="navigation__user-info">
        <p>{userName}</p>
        <span>{role}</span>
      </div>
    </div>
    <Button onClick={handleLogout}>Log Out</Button>
  </div>
  );
};

export default Navigation;