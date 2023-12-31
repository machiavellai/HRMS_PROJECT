import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BiHomeAlt,
  BiUser,
  BiBriefcase,
  BiClipboard,
  BiChevronRight,
  BiChevronLeft,
} from "react-icons/bi";
import "./Sidebar.scss";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`sidebar ${isOpen ? "open" : ""}`}>
      <div
        className={`sidebar-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <BiChevronLeft className="icon" />
        ) : (
          <BiChevronRight className="icon" />
        )}
      </div>
      <ul className="nav flex-column">
        <h2 className="sidebar-text">GENERAL</h2>
        <li className="nav-item">
          <NavLink
            exact
            to="/home"
            className="nav-link"
            activeClassName="active"
          >
            <BiHomeAlt className="icon" />
            Overview
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/employeetable"
            className="nav-link"
            activeClassName="active"
          >
            <BiUser className="icon" />
            Employees
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/jobAdverts"
            className="nav-link"
            activeClassName="active"
          >
            <BiBriefcase className="icon" />
            Recruit/JobAdverts
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/onboarding"
            className="nav-link"
            activeClassName="active"
          >
            <BiClipboard className="icon" />
            Onboarding
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
