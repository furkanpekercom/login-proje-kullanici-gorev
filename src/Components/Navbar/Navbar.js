import React, {Component} from "react";
import "./Navbar.css";
import {useDispatch, useSelector} from "react-redux";

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
        <h2>DenemeLogo</h2>
      </div>

      <div className="colon-sag">
      <button className="logout_btn" onClick={(e) => handleLogout(e)}>
          Çıkış Yap
        </button>
      </div>
      
     
    </navbar>
  );
};

export default Navbar;
