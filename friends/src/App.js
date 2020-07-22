import React from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import FriendsForm from "./components/FriendsForm";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/friendform">Add A Friend</Link>
          <Link to="/friendlist">View Friends</Link>
        </nav>
        <Switch>
          <PrivateRoute exact path="/friendform" component={FriendsForm} />
          <PrivateRoute exact path="/friendlist" component={FriendsList} />
          <Route path="/login" component={LoginForm} />
          {/* <Route component={LoginForm} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
