import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addUser, deleteUser, updateUsername} from "../src/features/Users";
import "../src/Components/Personel.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const userList = useSelector((state) => state.users.value);

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [gorev, setGorev] = useState("");
  const [verilenGorev, setVerilenGorev] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div className="personel">
      <Navbar />
      <div className="personel-sayfa-iki">
        <input
          type="text"
          placeholder="İsim..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Kullanıcı Adi..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          Personel Ekle
        </button>
      </div>
      <div className="personel-sayfa-iki">
        {userList.map((user) => {
          return (
            <div className="ui cards">
              <div className="card">
                <div className="content">
                  <div className="header">{user.name}</div>
                  <div className="meta">{user.username}</div>
                  <div className="description">
                    {user.gorev}
                    <hr />

                    <div className="show-div">
                      <h5>Görev: </h5>
                      <p>{user.verilenGorev}</p>
                    </div>
                  </div>
                </div>
                <div className="extra content">
                  <div className="ui two buttons">
                    <div className="ui basic green button" >Görev Gir</div>
                    <div className="ui basic red button">Personel Sil</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
