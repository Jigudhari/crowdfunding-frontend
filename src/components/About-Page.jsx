import React from 'react';
//import fetchHeader from "../api/about-project.js"
//import fetchFooter from "../api/about-project.js"


function AboutComponent({ headerContent, footerContent }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="stylesheet" href="portfolio.css" />
                <title>She Codes</title>
            </head>
            <body>
                <div dangerouslySetInnerHTML={{ __html: headerContent }} />

                <main>
                    <section id="hero">
                        <div id="header-div" className="child">
                            <img id="myimage" src="images/mypic3.jpeg" alt="My Pic" />
                        </div>
                        <div id="intro" className="child">
                            <h1>Hi, I'm Jignasa Patel.</h1>
                            <h1>I'm a Junior Developer in Perth, Western Australia.</h1>
                            <h1>I'd love to hear from Syou.</h1>
                        </div>
                    </section>
                </main>

                <div id="div-1" className="column">
                    <h2>Project</h2>
                    <p>
                        I have implemented She Codes website as part of She codes plus program. I have used technologies
                        such as CSS, html and Github. Flex and media queries have been used in css to make website
                        responsive. Looking forward to implement much more interesting projects in future...
                    </p>
                    <div id="projectImages">
                        <div id="project1Div" className="child3">
                            <img id="project1" src="images/project-1.jpeg" alt="Project 1" />
                        </div>
                        <div id="project2Div" className="child3">
                            <img id="peoject2" src="images/project-2.jpeg" alt="Project 2" />
                        </div>
                    </div>
                </div>

                <div dangerouslySetInnerHTML={{ __html: footerContent }} />
            </body>
        </html>
    );
}

export default AboutComponent;