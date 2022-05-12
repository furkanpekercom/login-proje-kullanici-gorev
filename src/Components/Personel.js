import React from "react";
import "./Personel.css";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../features/userSlice";
import Navbar from "./Navbar/Navbar"

const Personel = () => {
    const user = useSelector(selectUser);

  
  return (
    <div className="personel">
      <Navbar/>
      <h1>
        Hoşgeldiniz. <span className="user_name">{user.name}</span>
      </h1>
    </div>
  );

};

export default Personel;
