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
          <Route path="/:theme">
            <Topbar inGame={true} />
          </Route>
          <Route path="/*">
            <Topbar inGame={false} />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/:theme">
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
