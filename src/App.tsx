import "./App.css";
import styled from "styled-components";
import Topbar from "./Topbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainPage from "./MainPage";
import Game from "./Game";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/:theme">
            <Topbar inGame={true} />
            <Game />
          </Route>
          <Route path="/*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
