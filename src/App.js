import React, { useState } from 'react';
import './App.css';
import { ThemeProvider, Div, Col, Row, Container, Text, Image, Button, Icon } from "atomize";
import IntroSection from "./compositions/IntroSection";
import GithubSection from "./compositions/GithubSection";
import AboutSection from "./compositions/AboutSection";
import FormSection from "./compositions/FormSection";
import Header from "./compositions/Header";
import Footer from "./compositions/Footer";
import Toggle from "./components/Toggle";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const darkTheme = {
  colors: {
    brandprimary: "#ffffff",
    brandsecondary: "#FFC107",
    gray: "#252A44",
    darkgray: "#ffffff",
    white: "#15141F"
  }
};

const lightTheme = {
  colors: {
    brandprimary: "#6400E4",
    brandsecondary: "#FFC107",
    gray: "#F1F3FE",
    darkgray: "#15141F",
    white: "#ffffff"
  }
};

function App() { 

const [theme, setTheme] = useState('light');

const toggleTheme = () => {
  if(theme === 'light'){
    setTheme('dark');
  } else {
    setTheme('light'); 
  }
}

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
     <Router>
      <div className="App">
      <Header/>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
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
        <Footer/>
      </div>
    </Router>
    </ThemeProvider>
  );
}


function Home() {
  return  <Div>
  <Div bg="gray">
  <IntroSection/>
</Div>
<Div bg="white">
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


