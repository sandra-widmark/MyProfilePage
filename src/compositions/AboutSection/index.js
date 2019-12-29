import React from "react";
import { ThemeProvider, Div, Col, Row, Container, Text, Image, Button, Icon } from "atomize";
import ButtonPrimary from "../../components/ButtonPrimary"
import CVImage from "./images/sandra2.png"


export default class AboutSection extends React.Component {
    render(){
        return (
        <Container align="left" justify="space-between" p={{ x: { xs: '2rem', md: '3rem' }, y: { xs: '2rem', md: '3rem' }}}>
            <Row>
            <Col size="8">
              <Div>
              <Text 
                      tag="h2" 
                      textSize="display1" 
                      textColor="brandprimary"
                      m={{ y: "1.5rem" }}
                      >
                    Jag vill bidra till något större!
              </Text>
              <Text 
                tag="p" 
                textSize="title" 
                textColor="black"
                >
                Jag är utbildad inom inom frontend med fokus på JavaScript och har även en kandidatexamen i grafisk design och kommunikation. Jag drivs mycket av att få tänka både logiskt och estetiskt i min roll som frontendutvecklare, och även att kunna bidra till något som skapar värde för andra människor eller världen i stort. 
                </Text>
              </Div>
            </Col>
            <Col size="4">
              <Div m={{ x: "1rem" }}>
              <img className="profile-picture" src={CVImage} />
              </Div>
            </Col>
          </Row>
        </Container>
        
        );
    }
}