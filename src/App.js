import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Shipping from "./components/Shipping/Shipping";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/signin">
              <SignIn />
            </Route>

            <Route path="/signup">
              <SignUp />
            </Route>

            <PrivateRoute path="/shipping">
              <Shipping />
            </PrivateRoute>

            <PrivateRoute path="/placeorder">
              <PlaceOrder />
            </PrivateRoute>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;


