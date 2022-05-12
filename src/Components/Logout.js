import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../features/userSlice";

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
      <h1>
        Hoşgeldiniz. <span className="user_name">{user.name}</span>
      </h1>
      <button className="logout_btn" onClick={(e) => handleLogout(e)}>
        Çıkış Yap
      </button>
    </div>
  );
};

export default Logout;
