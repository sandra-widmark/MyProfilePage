import React from 'react';
import './App.css';
import { ThemeProvider, Div, Col, Row, Container, Text, Image, Button, Icon } from "atomize";
import IntroSection from "./compositions/IntroSection";
import GithubSection from "./compositions/GithubSection";
import AboutSection from "./compositions/AboutSection";
import FormSection from "./compositions/FormSection";
import Header from "./compositions/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const theme = {
  colors: {
    brandprimary: "#6400E4",
    brandsecondary: "#FFC107",
    gray: "#F1F3FE",
    darkgray: "#15141F"
  }
};

function App() { 
  return (
    <ThemeProvider theme={theme}>
     <Router>
      <div className="App">
      <Header/>
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </ThemeProvider>
  );
}


function Home() {
  return  <Div>
  <Div bg="brandprimary">
  <IntroSection/>
</Div>
<Div bg="gray">
  <AboutSection />
</Div></Div>
}

function Projects() {
  return <Div bg="gray">
  <GithubSection />
  </Div>;
}

function Contact() {
  return <Div bg="gray">
  <FormSection />
  </Div>;
}

export default App;


