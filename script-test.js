let portfolioItemDiv = fragmentFromString(`<div class="row justify-content-around py-lg-4 pb-lg-4">

<div class="col-12 col-md-6 col-lg-4 mb-4 text-center">
    <div class="row">
        <div class="col p-3">
            <p class="mb-0" style="font-size: 25px;">${poFoApps[0].app}</p>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <a href="http://www.jdhprogrammer.com/JS_Password_Generator/" target="_blank">
                <img src="Assets/Images/Porfolio_Page_images/jdh_portfolio_thumb_003.jpg" class="img-fluid rounded mx-auto d-block poFoImg" alt="Screenshot of ">
            </a>
            <a class="poFoLinks" target="_blank" href="http://jdhprogrammer.com/JS_Password_Generator/">[visitDeployedApplication]</a>
            <a class="poFoLinks" target="_blank" href="https://github.com/jdhprogrammer/JS_Password_Generator">{visitGitHubProject}</a>
        </div>
    </div>
</div>`);

document.body.appendChild(portfolioItemDiv)

function fragmentFromString(strHTML) {
    return document.createRange().createContextualFragment(strHTML);
}