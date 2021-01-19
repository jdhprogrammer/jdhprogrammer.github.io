import React from 'react';


function Contact() {

    // When the component mounts, update the title to be Wikipedia Searcher
    // useEffect(() => {

    // }, [search]);

    // const handleInputChange = event => {
    //     setSearch(event.target.value);
    // };

    // const handleFormSubmit = event => {
    //     event.preventDefault();
    // };

    return (
        <main role="main" class="container">
            <div class="spacer py-4"></div>
            <section class="mb-5 pb-5">

                <h2 class="h1-responsive font-weight-bold text-center my-2">Contact Me</h2>

                <p class="text-center w-responsive mx-auto ">Do you have any questions? Please do not hesitate to contact me directly.</p>
                <h4 class="h3-responsive font-weight-bold text-center mt-4 mb-4"> James DAVID Harris</h4>
                <div class="row">
                    <div class="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mailto:jdh.programmer@gmail.com" method="POST">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control" />
                                        <label for="name" class="">Your name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="email" name="email" class="form-control" />
                                        <label for="email" class="">Your email</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <input type="text" id="subject" name="subject" class="form-control" />
                                        <label for="subject" class="">Subject</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                        <label for="message">Your message</label>
                                    </div>
                                </div>
                            </div>

                            <div class="text-center text-md-left">
                                <button class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">
                                    Send
                                </button>
                            </div>
                            <div class="status"></div>
                        </form>
                    </div>
                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                <p>Richardson, TX 75080, USA</p>
                            </li>

                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                <p>(214) 306-1657</p>
                            </li>

                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                <p>jdh.programmer@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>

    );
}

export default Contact;
