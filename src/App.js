import React from 'react';
import './App.css';
import { ThemeProvider, Div, Col, Row, Container, Text, Image, Button, Icon } from "atomize";
import IntroSection from "./compositions/IntroSection";
import GithubSection from "./compositions/GithubSection";
import AboutSection from "./compositions/AboutSection";
import CVSection from "./compositions/CVSection";
import FormSection from "./compositions/FormSection";

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
        <Text 
          tag="h1" 
          textSize="display3" 
          m={{ xs: '0.5rem', md: '0.5rem' }}
          textColor="brandprimary"
          >
          Sandra Widmark
          </Text>
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


