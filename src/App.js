import React, { useState } from 'react';
import './App.css';
import { ThemeProvider, Div} from "atomize";
import IntroSection from "./compositions/IntroSection";
import GithubSection from "./compositions/GithubSection";
import AboutSection from "./compositions/AboutSection";
import FormSection from "./compositions/FormSection";
import Header from "./compositions/Header";
import Footer from "./compositions/Footer";
import Toggle from "./components/Toggle";
import ToggleColor from "./components/ToggleColor";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


let darkTheme = {
  colors: {
    brandprimary: "#ffffff",
    brandsecondary: "#FFC107",
    gray: "#252A44",
    darkgray: "#ffffff",
    white: "#15141F"
  }
};

let lightTheme = {
  colors: {
    brandprimary: "#6400E4",
    brandsecondary: "#FFC107",
    gray: "#F1F3FE",
    darkgray: "#15141F",
    white: "#ffffff"
  }
};

let userTheme = {
  colors: {
    brandprimary: "#6400E4",
    brandsecondary: "#6400E4",
    gray: "#F1F3FE",
    darkgray: "#6400E4",
    white: "#6400E4"
  }
};

function App() { 

  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    if(theme === lightTheme){
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme); 
    }
  }

  const toggleColorTheme = () => {
    if(theme === lightTheme){
      setTheme(userTheme);
    } else {
      setTheme(userTheme); 
    }
  }

  return (
    //hur kan jag komma åt themprovidern i kompnenter? 
    <ThemeProvider theme={theme}> 
     <Router>
      <div className="App">
      <Header/>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <ToggleColor theme={theme} toggleColorTheme={toggleColorTheme} />
        <Switch>
          <Route path="/projects">
            <Projects />
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
  </Div>
  <Div bg="gray">
    <FormSection/>
  </Div>
</Div>
}

function Projects() {
  return <Div bg="gray">
  <GithubSection />
  </Div>
}
export default App;


