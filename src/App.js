import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";

import About from "./pages/About"

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <NavBar />
          <Switch>
            <Route exact path="/" >
              <About></About>
            </Route>
           
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
