import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../features/userSlice";
import Navbar from "./Navbar/Navbar"

import "./Logout.css";

const Logout = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <div className="logout">
      <Navbar/>
      <h1>
        Merhaba. <span className="user_name">{user.name}</span>
      </h1>
      <h1>
        Mail Adresiniz. <span className="user_name">{user.email}</span>
      </h1>
      <button className="logout_btn" onClick={(e) => handleLogout(e)}>
        Çıkış Yap
      </button>
    </div>
  );
};

export default Logout;
