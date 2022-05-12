import React, {Component} from "react";

export default class PersonelList extends Component {
 
  render() {
    const {id, onem, personel, konum, gorev} = this.props.personel;

    return (
      <div>
          {id}<br/>
          {onem}<br/>
          {personel}<br/>
          {konum}<br/>
          {gorev}<br/>
          


      </div>
    );
  }
}
