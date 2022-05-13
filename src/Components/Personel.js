import React, {Component} from "react";
import "./Personel.css";
import Navbar from "./Navbar/Navbar";
import {personelData} from "../personelData";
import PersonelList from "./PersonelList";

export default class Personel extends Component {
  state = {
    personels: personelData,
  };

  render() {
    const {personels} = this.state;

    return (
      <div className="personel">
        <Navbar />
        <div className="personel-sayfa-iki">
          {personels.map((personel) => (
            <PersonelList key={personel.id} personel={personel} />
          ))}
        </div>
      </div>
    );
  }
}
