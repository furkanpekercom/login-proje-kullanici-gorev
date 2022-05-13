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
    const {id, onem, personel, konum, gorev, img, verilenGorev} = this.props.personel;

    return (
      <div className="ui cards">
        <div className="card">
          <div className="content">
            
            <div className="header">{personel}</div>
            <div className="meta">{konum}</div>
            <div className="description">
              {gorev}
              <hr/>
              {this.state.showInfo && <div className="show-div"><h3>{verilenGorev}</h3><button >Görev Düzenle</button></div>}
            </div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic green button" onClick={this.handleInfo}>Görevler</div>
              <div className="ui basic red button">PersonelSil</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
