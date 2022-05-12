import React from "react";
import {useSelector} from "react-redux";
import Login from "../src/Components/Login";
import Logout from "../src/Components/Logout";
import Personel from "../src/Components/Personel";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import {selectUser} from "./features/userSlice";

const App = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      {user ? (
        <Router>
          <Switch>
            <Route path="/" exact component={Personel} />
            <Route path="/profil" component={Logout} />
          </Switch>
        </Router>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
