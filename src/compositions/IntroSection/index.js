import React from "react";
import { ThemeProvider, Div, Col, Row, Container, Text, Image, Button, Icon } from "atomize";
import ButtonPrimary from "../../components/ButtonPrimary"
import ButtonSecondary from "../../components/ButtonSecondary"

export default class IntroSection extends React.Component {
    render(){
        return (
        <Container d="flex" flexDir="column" align="center" justify="space-between" p={{ x: { xs: '2rem', md: '3rem' }, y: { xs: '2rem', md: '6rem' }}}>
          <Row> 
            <Text 
                    tag="h1" 
                    textSize="display3" 
                    textColor="white"
                    m="2rem"
                    textWeight="900"
                    >
                    Frontendutvecklare
            </Text>
          </Row>
          <row>
            <Div d="flex">
              <Div m={{ r: "3rem"}}>
                <ButtonPrimary text="Se mina projekt"></ButtonPrimary>
              </Div>
              <ButtonSecondary  color="white" text="Kontakta mig"></ButtonSecondary>
            </Div>
          </row>
        </Container>
        );
    }
}