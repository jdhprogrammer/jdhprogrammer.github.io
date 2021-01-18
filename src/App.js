import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";

import About from "./pages/About"

function App() {
  return (
    <Router>
      <div>
          <NavBar />
          <Switch>
            <Route exact path="/" >
              <About></About>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
