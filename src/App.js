import React, { useState } from 'react';
import './App.css';
import { ThemeProvider, Div} from "atomize";
import IntroSection from "./compositions/IntroSection";
import GithubSection from "./compositions/GithubSection";
import AboutSection from "./compositions/AboutSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeSwitch from "./components/ThemeSwitch";
import UserThemeSection from "./compositions/UserThemeSection";
import {userTheme} from "./compositions/UserThemeSection";
import {
  BrowserRouter as Router,
  Switch,
  Route
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

  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    if(theme === lightTheme){
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme); 
    }
  }

  const setUserTheme = () => {
      setTheme(userTheme);
  }

  return (

    <ThemeProvider theme={theme}> 
     <Router>
      <div className="App">
        <Header/>
        <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
            <Div bg="gray" id="usertheme">
              <UserThemeSection theme={theme} setUserTheme={setUserTheme} />
            </Div>
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
</Div>
}

function Projects() {
  return <Div bg="gray">
  <GithubSection />
  </Div>
}
export default App;


