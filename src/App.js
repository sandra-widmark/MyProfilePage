import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, Div, Col, Row, Container, Text, Image, Button, Icon } from "atomize";
import IntroSection from "./compositions/IntroSection";
import CardNoImg from "./components/card";
import UpdateModal from './components/modal/modal';

function App() {
  return (
    <ThemeProvider>
    <div className="App">     
        <Text 
          tag="h1" 
          textSize="display3" 
          m={{ xs: '0.5rem', md: '0.5rem' }}
          textColor="black"
          >
          Sandra Widmark
          </Text>
          <div className="App-container" bg="black400">

            <IntroSection />

            <Container d="flex" flexDir="column" justify="space-between">
            <Text 
                    tag="h2" 
                    textSize="display2" 
                    textColor="white"
                    m={{ xs: '0.5rem', md: '1rem' }}
                    >
                    Mina Github-projekt
            </Text>
              <Row>
                <CardNoImg name="test1" description="Lorem ipusm dolor sit amet" />
                <CardNoImg name="test2" description="Lorem ipusm dolor sit amet"/>
                <CardNoImg  name="test3" description="Lorem ipusm dolor sit amet"/>
              </Row>
              <Row>
                <UpdateModal/>
              </Row>
            </Container>
        </div>
    </div>
    </ThemeProvider>
  );
}

export default App;


