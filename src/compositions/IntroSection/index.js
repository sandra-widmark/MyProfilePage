import React from "react";
import { Div, Row, Container, Text } from "atomize";
import ButtonPrimary from "../../components/ButtonPrimary"
import ButtonSecondary from "../../components/ButtonSecondary"


export default class IntroSection extends React.Component {

    render(){
        return (
        <Container d="flex" flexDir="column" align="center" justify="space-between" p={{ x: { xs: '1.5rem', md: '3rem' }, y: { xs: '1.5rem', md: '6rem' }}}>
          <Row> 
            <Text 
                tag="h1" 
                textSize={{ xs: "heading", md: "display3" }}
                textColor="brandprimary"
                m={{ xs: "0", md: "2rem" }}
                textWeight="900"
                >
                Frontendutvecklare
            </Text>
          </Row>
          <Row>
            <Div d="flex" justify="center" flexDir={{ xs: 'column', md: 'row' }} m={{ b: "0.5rem"}}>
              <Div m={{ r: { xs: '0', md: '3rem' }, y: { xs: '1rem', md: '0' }}} >
                <ButtonPrimary text="Se mina projekt" link="/projects"></ButtonPrimary>
              </Div>
              <ButtonSecondary hoverbg="brandprimary" hovercolor="white" color="brandprimary" text="Lämna en kommentar" link="/contact"></ButtonSecondary>
            </Div>
          </Row>
        </Container>
        );
    }
}