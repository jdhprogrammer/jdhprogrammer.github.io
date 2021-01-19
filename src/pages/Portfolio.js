import React, {useEffect, useState, useContext} from 'react';
import Project from "../components/Project/Project"

import Thumb001 from "../portfolio_images/jdh_portfolio_thumb_001.jpg"
import Thumb002 from "../portfolio_images/jdh_portfolio_thumb_002.jpg"
import Thumb003 from "../portfolio_images/jdh_portfolio_thumb_003.jpg"
import Thumb004 from "../portfolio_images/jdh_portfolio_thumb_004.jpg"
import Thumb005 from "../portfolio_images/jdh_portfolio_thumb_005.jpg"
import Thumb006 from "../portfolio_images/jdh_portfolio_thumb_006.jpg"
// import Thumb007 from "../portfolio_images/jdh_portfolio_thumb_007.jpg"
// import Thumb008 from "../portfolio_images/jdh_portfolio_thumb_008.jpg"
// import Thumb009 from "../portfolio_images/jdh_portfolio_thumb_009.jpg"
// import Thumb010 from "../portfolio_images/jdh_portfolio_thumb_010.jpg"
// import Thumb011 from "../portfolio_images/jdh_portfolio_thumb_011.jpg"
// import Thumb012 from "../portfolio_images/jdh_portfolio_thumb_012.jpg"

import Projects from "../utils/projects.json"


function Portfolio() {

    const [projects, setProjects] = useState(Projects);
    const [current, setCurrent] = useState({});

    const thumbs = [
        Thumb003,
        Thumb001,
        Thumb002,
        Thumb004,
        Thumb005,
        Thumb006
        // Thumb007,
        // Thumb008,
        // Thumb009,
        // Thumb010,
        // Thumb011,
        // Thumb012
    ]

    // const thumbs = thumbnails.sort(order)

    // function order(a, b) {
    //     return a < b ? -1 : (a > b ? 1 : 0);
    // }

    // When the component mounts, update the title to be Wikipedia Searcher
    useEffect(() => {

    }, []);

    // const handleInputChange = event => {
    //     setSearch(event.target.value);

    // };

    // const handleFormSubmit = event => {
    //     event.preventDefault();
    // };
    return (
        <main role="main" class="container">
            <div className="spacer py-4"></div>
            <div className="row justify-content-around py-lg-4 pb-lg-4">

                {projects.slice().reverse().map((project) => (
                    <Project
                        key={project.id}
                        project={project}
                        thumb={thumbs[parseInt(project.index)]} />
                ))}

            </div>
        </main>
    );
}

export default Portfolio;


// let thumb;
// switch (project.id) {
//     case "0001":
//         thumb = Thumb001
//         break;
//     case "0002":
//         thumb = Thumb002
//         break;
//     case "0003":
//         thumb = Thumb003
//         break;
//     case "0004":
//         thumb = Thumb004
//         break;
//     case "0005":
//         thumb = Thumb005
//         break;
//     case "0006":
//         thumb = Thumb006
//         break;
//     default:
//         break;
// }
// return 

/* <div className="col-12 col-md-6 col-lg-4 mb-4 text-center">
<div className="row">
    <div className="col p-3">
        <p className="mb-0" style={{"fontSize": "25px"}}>JS Password Generator</p>
    </div>
</div>
<div className="row">
    <div className="col">
        <a href="https://www.jdhprogrammer.com/JS_Password_Generator/" target="_blank">
            <img src="Assets/Images/Porfolio_Page_images/jdh_portfolio_thumb_003.jpg" className="img-fluid rounded mx-auto d-block poFoImg" alt="Screenshot of " />
        </a>
        <a className="poFoLinks" target="_blank" href="https://jdhprogrammer.com/JS_Password_Generator/">[visitDeployedApplication]</a>
        <a className="poFoLinks" target="_blank" href="https://github.com/jdhprogrammer/JS_Password_Generator">{visitGitHubProject}</a>
    </div>
</div>
</div>

<div className="col-12 col-md-6 col-lg-4 mb-4 text-center">
<div className="row">
    <div className="col p-3">
        <p className="mb-0" style={{"fontSize": "25px"}}>Responsive Bootstrap</p>
    </div>
</div>
<div className="row">
    <div className="col">
        <a href="https://www.jdhprogrammer.com/Responsive_Bootstrap_Site/" target="_blank">
            <img src="Assets/Images/Porfolio_Page_images/jdh_portfolio_thumb_001.jpg" className="img-fluid rounded mx-auto d-block poFoImg" alt="Screenshot of " />
        </a>
        <a className="poFoLinks" target="_blank" href="https://jdhprogrammer.com/Responsive_Bootstrap_Site/">[visitDeployedApplication]</a>
        <a className="poFoLinks" target="_blank" href="https://github.com/jdhprogrammer/Responsive_Bootstrap_Site">{visitGitHubProject}</a>
    </div>
</div>
</div>

<div className="col-12 col-md-6 col-lg-4 mb-4 text-center">
<div className="row">
    <div className="col p-3">
        <p className="mb-0" style={{"fontSize": "25px"}}>Javascript Quiz</p>
    </div>
</div>
<div className="row">
    <div className="col">
        <a href="https://www.jdhprogrammer.com/Coding_Quiz" target="_blank">
            <img src="Assets/Images/Porfolio_Page_images/jdh_portfolio_thumb_002.jpg" className="img-fluid rounded mx-auto d-block poFoImg" alt="Screenshot of " />
        </a>
        <a className="poFoLinks" target="_blank" href="https://jdhprogrammer.com/Coding_Quiz/">[visitDeployedApplication]</a>
        <a className="poFoLinks" target="_blank" href="https://github.com/jdhprogrammer/Coding_Quiz">{visitGitHubProject}</a>
    </div>
</div>
</div>

<div className="col-12 col-md-6 col-lg-4 mb-4 text-center">
<div className="row">
    <div className="col p-3">
        <p className="mb-0" style={{"fontSize": "25px"}}>Dynamic Day Planner</p>
    </div>
</div>
<div className="row">
    <div className="col">
        <a href="https://www.jdhprogrammer.com/Dynamic_Day_Planner/" target="_blank">
            <img src="Assets/Images/Porfolio_Page_images/jdh_portfolio_thumb_004.jpg" className="img-fluid rounded mx-auto d-block poFoImg" alt="Screenshot of Dynamic Day Planner App" />
        </a>
        <a className="poFoLinks" target="_blank" href="https://jdhprogrammer.com/Dynamic_Day_Planner/">[visitDeployedApplication]</a>
        <a className="poFoLinks" target="_blank" href="https://github.com/jdhprogrammer/Dynamic_Day_Planner">{visitGitHubProject}</a>
    </div>
</div>
</div>

<div className="col-12 col-md-6 col-lg-4 mb-4 text-center">
<div className="row">
    <div className="col p-3">
        <p className="mb-0" style={{"fontSize": "25px"}}>API Interaction</p>
    </div>
</div>
<div className="row">
    <div className="col">
        <a href="https://www.jdhprogrammer.com/Weather-Dashboard/" target="_blank">
            <img src="Assets/Images/Porfolio_Page_images/jdh_portfolio_thumb_005.jpg" className="img-fluid rounded mx-auto d-block poFoImg" alt="Screenshot of " />
        </a>
        <a className="poFoLinks" target="_blank" href="https://jdhprogrammer.com/Weather-Dashboard/">[visitDeployedApplication]</a>
        <a className="poFoLinks" target="_blank" href="https://github.com/jdhprogrammer/Weather-Dashboard">{visitGitHubProject}</a>
    </div>
</div>
</div>

<div className="col-12 col-md-6 col-lg-4 mb-4 text-center">
<div className="row">
    <div className="col p-3">
        <p className="mb-0" style={{"fontSize": "25px"}}>Optimization</p>
    </div>
</div>
<div className="row">
    <div className="col">
        <a href="https://www.jdhprogrammer.com/Refactor_and_Optimization/" target="_blank">
            <img src="Assets/Images/Porfolio_Page_images/jdh_portfolio_thumb_006.jpg" className="img-fluid rounded mx-auto d-block poFoImg" alt="Screenshot of " />
        </a>
        <a className="poFoLinks" target="_blank" href="https://jdhprogrammer.com/Refactor_and_Optimization/">[visitDeployedApplication]</a>
        <a className="poFoLinks" target="_blank" href="https://github.com/jdhprogrammer/Refactor_and_Optimization">{visitGitHubProject}</a>
    </div>
</div>
</div>

<div className="col-12 col-md-6 col-lg-4 mb-4 text-center noShow">
<div className="row">
    <div className="col p-3">
        <p className="mb-0" style={{"fontSize": "25px"}}>MERN Stack</p>
    </div>
</div>
<div className="row">
    <div className="col">
        <a href="https://www.jdhprogrammer.com/JS_Password_Generator/" target="_blank">
            <img src="https://placehold.it/350x350" className="img-fluid rounded mx-auto d-block poFoImg" alt="" />
        </a>
        <a className="poFoLinks" target="_blank" href="https://jdhprogrammer.com/JS_Password_Generator/">[visitDeployedApplication]</a>
        <a className="poFoLinks" target="_blank" href="https://github.com/jdhprogrammer/JS_Password_Generator">{visitGitHubProject}</a>
    </div>
</div>
</div>

<div className="col-12 col-md-6 col-lg-4 mb-4 text-center noShow">
<div className="row">
    <div className="col p-3">
        <p className="mb-0" style={{"fontSize": "25px"}}>Heroku</p>
    </div>
</div>
<div className="row">
    <div className="col">
        <a href="https://www.jdhprogrammer.com/JS_Password_Generator/" target="_blank">
            <img src="https://placehold.it/350x350" className="img-fluid rounded mx-auto d-block poFoImg" alt="" />
        </a>
        <a className="poFoLinks" target="_blank" href="https://jdhprogrammer.com/JS_Password_Generator/">[visitDeployedApplication]</a>
        <a className="poFoLinks" target="_blank" href="https://github.com/jdhprogrammer/JS_Password_Generator">{visitGitHubProject}</a>
    </div>
</div>
</div>

<div className="col-12 col-md-6 col-lg-4 mb-4 text-center noShow">
<div className="row">
    <div className="col p-3">
        <p className="mb-0" style={{"fontSize": "25px"}}>Python</p>
    </div>
</div>
<div className="row">
    <div className="col">
        <a href="https://www.jdhprogrammer.com/JS_Password_Generator/" target="_blank">
            <img src="https://placehold.it/350x350" className="img-fluid rounded mx-auto d-block poFoImg" alt="" />
        </a>
        <a className="poFoLinks" target="_blank" href="https://jdhprogrammer.com/JS_Password_Generator/">[visitDeployedApplication]</a>
        <a className="poFoLinks" target="_blank" href="https://github.com/jdhprogrammer/JS_Password_Generator">{visitGitHubProject}</a>
    </div>
</div>
</div> */