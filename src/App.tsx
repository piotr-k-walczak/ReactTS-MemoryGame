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
import { Themes, themeToName } from "./themes";
import {Helmet} from "react-helmet"

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Memory Online</title>
        </Helmet>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          {
            Themes.map(theme => {
              return <Route path={"/" + themeToName(theme)}>
                <Topbar inGame={true} />
                <Game />
            </Route>
            })
          }
          <Route path="/*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
