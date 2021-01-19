import React from 'react';
import creative from "../Assets/Images/callout-creative.jpg"
import driven from "../Assets/Images/callout-driven.jpg"
import professional from "../Assets/Images/callout-professional.jpg"


function About() {

    // const [about, setAbout] = useState({});
    // const [search, setSearch] = useState("");
    // // When the component mounts, update the title to be Wikipedia Searcher
    // useEffect(() => {}
    // }, [search]);

    // const handleInputChange = event => {
    //     setSearch(event.target.value);
    // };
    // const handleFormSubmit = event => {
    //     event.preventDefault();
    // };

    return (
        <div>


            <main role="main" className="container">

                <div className="row text-center pb-4 py-5" style={{fontSize: "28px", fontStyle: "italic"}}>
                    <div className="col-12 text-left text-sm-center px-2">Full Stack Developer with hands-on knowledge and experience
                    with front/back-end development technologies, libraries, &amp; frameworks. Bringing to the table a background in
                    Audio/Visual Technology and Photography.  Worked on projects in Agile development environments
                    focusing on UI quality, responsiveness, and optimization. Effective at problem solving,
                    multi-tasking, debugging, and helping teammates. Strive to be approachable, friendly,
            communicate clearly, and always continue learning.</div>
                </div>
                <div className="row justify-content-around text-center py-2">
                    <div className="col-12 col-md-12 col-lg-3">
                        <div className="row">
                            <div className="col callouts">CREATIVE</div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <img className="img-fluid rounded mx-auto d-block" src={creative}
                                    alt="man looking down at camera in hands" />
                            </div>
                        </div>
                        <div className="row py-3">Andy ipsum dolor sit amet consectetur, adipisicing elit. Laudantium inventore
                        deserunt ipsum qui deleniti quas sit porro commodi suscipit, magnam, nulla quis, nam vero. Saepe
                        debitis, aliquid quod dolores assumenda, excepturi mollitia
                        sunt enim neque, eius accusamus ea molestias libero porro doAndy totam magni aut eos molestiae!
                    Consequatur, ratione eum?</div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-3">
                        <div className="row">
                            <div className="col callouts">DRIVEN</div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <img className="img-fluid rounded mx-auto d-block" src={driven}
                                    alt="someone running frmo a low angle mainly showing their shoes and the ground and sky" />
                            </div>
                        </div>
                        <div className="row py-3">Andy ipsum dolor sit amet consectetur, adipisicing elit. Laudantium inventore
                        deserunt ipsum qui deleniti quas sit porro commodi suscipit, magnam, nulla quis, nam vero. Saepe
                        debitis, aliquid quod dolores assumenda, excepturi mollitia
                        sunt enim neque, eius accusamus ea molestias libero porro doAndy totam magni aut eos molestiae!
                    Consequatur, ratione eum?</div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-3">
                        <div className="row">
                            <div className="col callouts">PROFESSIONAL</div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <img className="img-fluid rounded mx-auto d-block" src={professional}
                                    alt="lines of code on a computer monitor" />
                            </div>
                        </div>
                        <div className="row py-3">Andy ipsum dolor sit amet consectetur, adipisicing elit. Laudantium inventore
                        deserunt ipsum qui deleniti quas sit porro commodi suscipit, magnam, nulla quis, nam vero. Saepe
                        debitis, aliquid quod dolores assumenda, excepturi mollitia
                        sunt enim neque, eius accusamus ea molestias libero porro doAndy totam magni aut eos molestiae!
                        Consequatur, ratione eum?
                </div>
                    </div>

                </div>

            </main>


        </div>

    );
}

export default About;
