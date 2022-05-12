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
      <div className="colon">
        <h2>DenemeLogo</h2>
      </div>

      <div className="colon">
        <ul className="colon-links">
          <li>Anasayfa</li>
          <li>Personel</li>
          <li>Süreç</li>
          <li>Yönetim</li>
          <li><button className="logout_btn" onClick={(e) => handleLogout(e)}>
          Çıkış Yap
        </button></li>
        </ul>
      </div>

     
    </navbar>
  );
};

export default Navbar;
