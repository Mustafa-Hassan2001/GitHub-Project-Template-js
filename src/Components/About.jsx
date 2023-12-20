/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/pexels-danny-meneses-943096.jsx";

const imageAltText = "Focusing";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "As a third-year computer science student at MAJU, I am highly proficient in several programming languages, including C, C++, Java, Python, HTML, CSS, and JavaScript. I have also completed multiple courses and certifications on topics such as Android Mobile Application Development, SQL, Data Structures and Algorithms, and HTML and CSS. I have applied my skills and knowledge in various programming projects and competitions, such as developing a Quiz App, a Weather App, and a Music Player App, and winning the MAJU Hackathon 2023. I have also been honored with the prestigious Dean's Award for Outstanding Academic Performance at MAJU.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Android App Development",
  "Front-end Development",
  "Open-Source Contributor ",
  "Various Programming Projects & Competitions",
  "AI & ML ",
  "learning ",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am a Mobile Application Developer and a Contributor at Social Winter of Code (SWOC) and GirlScript Summer of Code (GSSOC), two open-source programs that allow me to collaborate with talented developers from around the world and contribute to the broader open-source community. I have a passion for learning and exploring new technologies, which has driven me to stay up to date with the latest developments in the field of computer science. I am also a core leader of the Google Developer Student Club (GSDC) at MAJU, where I participate in various coding competitions, workshops, and events.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
