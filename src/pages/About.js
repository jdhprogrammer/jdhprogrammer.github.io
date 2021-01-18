

function About() {
    
    const [about, setAbout] = useState({

    });
    
  
    // When the component mounts, update the title to be Wikipedia Searcher
    useEffect(() => {
      
  
      if (!search) {
        return;
      }
  
    }, [search]);
  
    const handleInputChange = event => {
      setSearch(event.target.value);
      
    };
  
    const handleFormSubmit = event => {
      event.preventDefault();
    };
    return (
        <div>
    <header>
        <div class="m-auto text-center" style=" height: 150px;">
            <img src="Assets/Images/jdh-01.png" class="img-fluid" style="height: 150px;" alt="JDHarris Signature" />
        </div>

        <nav role="navigation" class="navbar-top navbar-expand-md navbar-dark bg-dark pl-3 pr-3 py-2"
            style="font-family: 'Catamaran', sans-serif; position: absolute; top: 150; left: 0; right: 0; margin: auto; z-index: 1;">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto">

                    <li class="nav-item">
                        <a class="nav-link" href="index.html">ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="portfolio.html">PORTFOLIO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="jumbotron jumbotron-fluid" style="position: relative; top: 56px;">
            <div class="container" style="color: white; ">
                <h1 class="display-4">James David Harris</h1>
                <p class="lead" style="font-size: 30px; ">Dallas based FULL STACK Developer</p>
            </div>
        </div>

    </header>

    <main role="main" class="container">

        <div class="row text-center pb-4 py-5" style="font-size: 28px; font-style: italic;">
            <div class="col-12 text-left text-sm-center px-2">Full stack web developer with front-end and back-end
                programming experience educated at SMU Coding Boot camp. Skills in HTML, CSS, JavaScript, and Python and
                strengths in problem solving, balancing aesthetics with performance, and working
                with a team. Bringing to the table an extensive background in photography and audio visual technology.
                Re-designed and programmed Web and Mobile applications for multiple local businesses, with a focus on UX
                & UI quality to the customer.
                Interested in creating websites and applications that people are excited about and happy to use, and
                that make their lives easier. Never stop learning… Always be coding. Prepared to contribute unique ideas
                and understanding on visual and
                operational aspects of software. Excited to work with a team of developers eager to learn new things
                daily, always ready to listen or to lead.</div>
        </div>
        <div class="row justify-content-around text-center py-2">
            <div class="col-12 col-md-12 col-lg-3">
                <div class="row">
                    <div class="col callouts">CREATIVE</div>
                </div>
                <div class="row">
                    <div class="col text-center">
                        <img class="img-fluid rounded mx-auto d-block" src="Assets/Images/callout-creative.jpg"
                            alt="" />
                    </div>
                </div>
                <div class="row py-3">Andy ipsum dolor sit amet consectetur, adipisicing elit. Laudantium inventore
                    deserunt ipsum qui deleniti quas sit porro commodi suscipit, magnam, nulla quis, nam vero. Saepe
                    debitis, aliquid quod dolores assumenda, excepturi mollitia
                    sunt enim neque, eius accusamus ea molestias libero porro doAndy totam magni aut eos molestiae!
                    Consequatur, ratione eum?</div>
            </div>
            <div class="col-12 col-md-12 col-lg-3">
                <div class="row">
                    <div class="col callouts">DRIVEN</div>
                </div>
                <div class="row">
                    <div class="col text-center">
                        <img class="img-fluid rounded mx-auto d-block" src="Assets/Images/callout-driven.jpg" alt="" />
                    </div>
                </div>
                <div class="row py-3">Andy ipsum dolor sit amet consectetur, adipisicing elit. Laudantium inventore
                    deserunt ipsum qui deleniti quas sit porro commodi suscipit, magnam, nulla quis, nam vero. Saepe
                    debitis, aliquid quod dolores assumenda, excepturi mollitia
                    sunt enim neque, eius accusamus ea molestias libero porro doAndy totam magni aut eos molestiae!
                    Consequatur, ratione eum?</div>
            </div>
            <div class="col-12 col-md-12 col-lg-3">
                <div class="row">
                    <div class="col callouts">PROFESSIONAL</div>
                </div>
                <div class="row">
                    <div class="col text-center">
                        <img class="img-fluid rounded mx-auto d-block" src="Assets/Images/callout-professional.jpg"
                            alt="" />
                    </div>
                </div>
                <div class="row py-3">Andy ipsum dolor sit amet consectetur, adipisicing elit. Laudantium inventore
                    deserunt ipsum qui deleniti quas sit porro commodi suscipit, magnam, nulla quis, nam vero. Saepe
                    debitis, aliquid quod dolores assumenda, excepturi mollitia
                    sunt enim neque, eius accusamus ea molestias libero porro doAndy totam magni aut eos molestiae!
                    Consequatur, ratione eum?
                </div>
            </div>

        </div>

    </main>

    <div class="page-footer py-2 text-center">
        <div class="container">

            <a href="https://www.linkedin.com/in/david-harris-75080/" target="blank" class="icon-block">
                <i class="fab fa-linkedin linkedin fa-2x p-3"></i>
            </a>

            <a href="Assets/Profesional_Docs/JDH_FullStackDeveloper_Resume_2020.pdf" target="_blank" class="icon-block">
                <i class="far facebook  fa-file-alt fa-2x p-3"></i>
            </a>

            <a href="https://github.com/jdhprogrammer" target="_blank" class="icon-block">
                <i class="fab fa-github-square github fa-2x p-3"></i>
            </a>

            <a href="https://www.instagram.com/jdh_programmer/" target="_blank" class="icon-block">
                <i class="fa fa-instagram instagram fa-2x p-3"></i>
            </a>

            <a href="#" target="_blank" class="icon-block">
                <i class="fab fa-twitter-square twitter fa-2x p-3"></i>
            </a>

       
    </div>
    <div class="footer fixed-bottom">
        <div class="container text-center">
            <span class="text-muted">© Copyright 2020 David Harris
            </span>
        </div>
    </div>
    </div>
    </div>

    );
  }
  
  export default About;
  