import React from "react";
import "./Personel.css";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../features/userSlice";
import Navbar from "./Navbar/Navbar"

const Personel = () => {
  
  return (
    <div className="personel">
      <Navbar/>
      
    </div>
  );
  
};

export default Personel;
