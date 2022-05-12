import React, {Component} from "react";
import "./Personel.css";

export default class PersonelList extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    const {id, onem, personel, konum, gorev, img} = this.props.personel;

    return (
      <article className="furkan">
        <div className="img-container">
          <img src={img} />
          <span className="close-btn">
            <i className="fa-solid fa-square-xmark" />
          </span>
        </div>
        <div className="furkan-info">
          <h3>{personel}</h3>

          <h5>
            Gorevler
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && <p>{gorev}</p>}
        </div>
      </article>
    );
  }
}
