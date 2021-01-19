import React from "react";
import "./style.css"
import "./sticky-footer-navbar.css";

function Footer() {
    return (
        <div className="footer text-center">

            <div class="row white">
                <div className="col">
                    <a href="https://www.linkedin.com/in/david-harris-75080/" target="_blank" rel="noreferrer" className="icon-block">
                        <i className="fab fa-linkedin linkedin fa-2x p-3"></i>
                    </a>

                    <a href="Assets/Profesional_Docs/JDH_FullStackDeveloper_Resume_2020.pdf" target="_blank" rel="noreferrer" className="icon-block">
                        <i className="far facebook  fa-file-alt fa-2x p-3"></i>
                    </a>

                    <a href="https://github.com/jdhprogrammer" target="_blank" rel="noreferrer" className="icon-block">
                        <i className="fab fa-github-square github fa-2x p-3"></i>
                    </a>

                    <a href="https://www.instagram.com/jdh_programmer/" target="_blank" rel="noreferrer" className="icon-block">
                        <i className="fa fa-instagram instagram fa-2x p-3"></i>
                    </a>

                    <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer" className="icon-block">
                        <i className="fab fa-twitter-square twitter fa-2x p-3"></i>
                    </a>
                </div>
            </div>
            <div class="row grey">
                <div className="col">
                    <p className="text-muted">© Copyright 2021 David Harris</p>
                </div>
            </div>

        </div>

    );
}

export default Footer;
