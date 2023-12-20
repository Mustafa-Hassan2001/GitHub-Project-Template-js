/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pexels-pixabay-270408.jpg";

const imageAltText = "Coding & Development";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Mobile App Development Basics (a beginner's guide)",
    description:
      "A simple introduction to app development.",
    url: "https://www.linkedin.com/pulse/mobile-app-development-basics-beginners-guide-syed-mustafa-hassan-ufyqf/?trackingId=Nt1TlJIeQ6aRpnHsP8fw0g%3D%3D",
  },
  {
    title: "Web development basics (a beginner's guide)",
    description:
      "A simple introduction to web development.",
    url: "https://www.linkedin.com/pulse/web-development-basics-beginners-guide-syed-mustafa-hassan-qdmyf/?trackingId=Nt1TlJIeQ6aRpnHsP8fw0g%3D%3D",
  },
  {
    title: "What Is Coding?",
    description:
      "All your questions about coding answered in this in-depth guide about the basics of coding.",
    url: "https://www.linkedin.com/pulse/what-coding-syed-mustafa-hassan/?trackingId=YqeIr%2FE4REe%2FTRWZVhQP6w%3D%3D",
  },
  {
    title: "What is Software Development ?",
    description:
      "Software development involves various processes related to software design, development and delivery.",
    url: "https://www.linkedin.com/pulse/what-software-development-syed-mustafa-hassan/?trackingId=YqeIr%2FE4REe%2FTRWZVhQP6w%3D%3D",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
