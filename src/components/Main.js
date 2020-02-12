import React from "react";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";
const Main = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/aboutme">
        <AboutMe />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
    </Switch>
  );
};

export default Main;
