import React from "react";
import { ThemeProvider, Div, Col, Row, Container, Text, Image, Button, Icon } from "atomize";
import ButtonPrimary from "../../components/Button"

export default class IntroSection extends React.Component {
    render(){
        return (
        <Container d="flex" flexDir="column" align="center" justify="space-between" p={{ x: { xs: '2rem', md: '3rem' }, y: { xs: '2rem', md: '3rem' }}}>
          <Row> 
            <Text 
                    tag="h1" 
                    textSize="display3" 
                    textColor="white"
                    >
                    Frontendutvecklare
            </Text>
          </Row>
          <Row>
            <Text 
                    tag="h1" 
                    textSize="display2" 
                    textColor="white"
                    m={{ b: { xs: '0rem', md: '0rem' }, b: { xs: '1rem', md: '2rem' }}}
                    >
                    Med öga för design
            </Text>
          </Row>
          <row>
            <Div d="flex">
              <ButtonPrimary>CV</ButtonPrimary>
              <ButtonPrimary>Github-projekt</ButtonPrimary>
              <ButtonPrimary>Om mig</ButtonPrimary>
            </Div>
          </row>
        </Container>
        );
    }
}