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
      Personel Sayfasıdır.
    </div>
  );

};

export default Personel;
