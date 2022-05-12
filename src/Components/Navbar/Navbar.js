import React, {Component} from "react";
import "./Navbar.css";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {logout, selectUser} from "../../features/userSlice";

const Navbar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <navbar className="navbar">
      <div className="colon-sol">
        <h2>OrnekLogo</h2>
      </div>

      <div className="colon-sag">
        <ul className="menu-ul">
          <li className="menu-li-ilk">
            <Link to="/" className="nav-links">
              Personel
            </Link>
          </li>
          <li className="menu-li-iki">
            <Link to="/profil" className="nav-links">
              Profil
            </Link>
          </li>
        </ul>
      </div>
    </navbar>
  );
};

export default Navbar;
