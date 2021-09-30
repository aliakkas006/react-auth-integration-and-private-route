import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Friend from "./Friend/Friend";
import Header from "./Header/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/friends">
            <Friend />
          </Route>

          <Route path="/friend/:friendId">
            <FriendDetail />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;


/* 

      <BrowserRouter>
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/friends">
            <Friends />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route>
            <NotFound />
          </Route>

        </Switch>
      </BrowserRouter>
*/
