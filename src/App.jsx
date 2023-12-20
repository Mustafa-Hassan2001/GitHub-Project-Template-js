/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Syed Mustafa Hassan",
  title: "Jr. Mobile App Developer | Microsoft Certified | Community Founder & Lead @ MLSA-MAJU | Alpha - MLSA @Microsoft | Core Member & Android Lead @Google Student Developer Club - MAJU",
  email: "mustafahassan@gmail.com",
  gitHub: "Mustafa-Hassan2001",
  instagram: "mustafahassan_2001",
  linkedIn: "mustafahassan2001",
  medium: "@fa21bscs0030",
  twitter: "MustafaHas20297",
  youTube: "@HelloWorld0030",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
