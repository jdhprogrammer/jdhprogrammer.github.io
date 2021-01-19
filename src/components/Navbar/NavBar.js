import React from "react";
import {Link} from "react-router-dom";
import "./style.css";
import jdh01 from "../../Assets/Images/jdh-01.jpg"
import banner from "../../Assets/Images/banner-2.jpg"
import NavBar from "react-bootstrap/Navbar"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <header>
      <div className="m-auto text-center" style={{"height": "150px"}}>
        <img src={jdh01} className="img-fluid" style={{"height": "150px"}} alt="JDHarris Signature" />
      </div>

      <NavBar role="navigation" className="navbar-top navbar-expand-md navbar-dark bg-dark  pl-3 pr-3 py-2"
        style={{"fontFamily": "'Catamaran'  sans-serif", "position": "absolute", "top": 150, "left": 0, "right": 0, "margin": "auto", "z-index": 1}}>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">

            <li className="nav-item">
              <Link className="nav-link" to={"/"}>ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/portfolio"}>PORTFOLIO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/contact"}>CONTACT</Link>
            </li>
          </ul>
        </div>
      </NavBar>

      <div className="jumbotron jumbotron-fluid" style={{"position": "relative", "top": "56px", "background": `url(${banner}) no-repeat center center`}}>
        <div className="container" style={{color: "white"}}>
          <h1 className="display-4">James David Harris</h1>
          <p className="lead" style={{fontSize: "30px"}}>Dallas based FULL STACK Developer</p>
        </div>
      </div>

    </header>
  );
}

export default Navbar;
