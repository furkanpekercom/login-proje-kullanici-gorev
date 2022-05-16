import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  addUser,
  deleteUser,
  updateUsername,
  yeniGorevEkle,
} from "../src/features/Users";
import "../src/Components/Personel.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const userList = useSelector((state) => state.users.value);

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [gorev, setGorev] = useState("");
  const [newGorevekle, setGorevEkle] = useState("");

  const [verilenGorev, setVerilenGorev] = useState("");

  return (
    <div className="personel">
      <Navbar />
      <div className="personel-sayfa-iki">
        <input
          type="text"
          placeholder="İsim Soyisim"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Departman ve İş Tanımı"
          onChange={(event) => {
            setGorev(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Görevi"
          onChange={(event) => {
            setVerilenGorev(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
                gorev,
                verilenGorev,
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
                  <div className="meta-peker">{user.konum}</div>
                  <div className="description-peker">
                    {user.gorev}
                    <hr />
                    <div className="show-div">
                      <h5>Görev: </h5>
                      <p>{user.verilenGorev}</p>
                      <input
                        type="text"
                        placeholder="Görevi Yenile.."
                        onChange={(event) => {
                          setGorevEkle(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="extra content">
                  <div className="ui two buttons">
                    <div
                      className="ui basic green button"
                      onClick={() => {
                        dispatch(
                          yeniGorevEkle({
                            id: user.id,
                            verilenGorev: newGorevekle,
                          })
                        );
                      }}
                    >
                      Görev Gir
                    </div>
                    <div
                      className="ui basic red button"
                      onClick={() => {
                        dispatch(deleteUser({id: user.id}));
                      }}
                    >
                      Personel Sil
                    </div>
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
