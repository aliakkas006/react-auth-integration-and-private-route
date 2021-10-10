import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
     
      <Router>
        <Header />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/signin">
            <SignIn />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;


