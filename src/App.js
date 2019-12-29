import React from 'react';
import './App.css';
import { ThemeProvider, Div, Col, Row, Container, Text, Image, Button, Icon } from "atomize";
import IntroSection from "./compositions/IntroSection";
import GithubSection from "./compositions/GithubSection";
import AboutSection from "./compositions/AboutSection";
import CVSection from "./compositions/CVSection";
import FormSection from "./compositions/FormSection";
import Header from "./compositions/Header";

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
    <div className="App">     
      <Header/>
      <div className="App-container">
        <Div bg="brandprimary">
          <IntroSection/>
        </Div>
        <Div bg="gray">
          <AboutSection />
        </Div>
        <Div bg="gray">
        <GithubSection />
        </Div>
        {/* <CVSection /> */}
        <Div bg="">
        <FormSection /> 
        </Div>
    </div>
    </div>
    </ThemeProvider>
  );
}

export default App;


