import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import Detail from "./pages/Detail"

import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path={["/", "/about"]} >
          <About></About>
        </Route>
        <Route exact path="/portfolio" >
          <Portfolio></Portfolio>
        </Route>
        <Route exact path="/contact" >
          <Contact></Contact>
        </Route>
        <Route exact path="/project/:id">
          <Detail></Detail>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
