import React from "react";
import "../../Assets/css/sticky-footer-navbar.css";
import "./style.css"

function Footer() {
  return (
    <div className="page-footer py-2 text-center">
    <div className="container">

        <a href="https://www.linkedin.com/in/david-harris-75080/" target="blank" className="icon-block">
            <i className="fab fa-linkedin linkedin fa-2x p-3"></i>
        </a>

        <a href="Assets/Profesional_Docs/JDH_FullStackDeveloper_Resume_2020.pdf" target="_blank" className="icon-block">
            <i className="far facebook  fa-file-alt fa-2x p-3"></i>
        </a>

        <a href="https://github.com/jdhprogrammer" target="_blank" className="icon-block">
            <i className="fab fa-github-square github fa-2x p-3"></i>
        </a>

        <a href="https://www.instagram.com/jdh_programmer/" target="_blank" className="icon-block">
            <i className="fa fa-instagram instagram fa-2x p-3"></i>
        </a>

        <a href="#" target="_blank" className="icon-block">
            <i className="fab fa-twitter-square twitter fa-2x p-3"></i>
        </a>

   
</div>
<div className="footer fixed-bottom">
    <div className="container text-center">
        <span className="text-muted">© Copyright 2020 David Harris
        </span>
    </div>
</div>
</div>
  );
}

export default Footer;
