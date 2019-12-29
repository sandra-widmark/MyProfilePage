import React from "react";
import { ThemeProvider, Div, Col, Row, Container, Text, Image, Button, Icon } from "atomize";
import Paragraph from "../../components/Paragraph"
import Subheader from "../../components/Subheader"

export default class CVSection extends React.Component {
    render(){
        return (
        <Container bg="transparent" align="left" justify="space-between" p={{ x: { xs: '2rem', md: '3rem' }, y: { xs: '2rem', md: '3rem' }}}>
            <row>
              <Text 
                  tag="h2" 
                  textSize="display2" 
                  textColor="black"
                  m={{ y: "1.5rem" }}
                  >
                CV
              </Text>
            </row>
            <Row>
            <Col size="6">
              <Div>
                <Subheader>Utbildning</Subheader>
                <Paragraph>JavaScript-utvecklare - Frontend, 300 YH-poäng</Paragraph>
                <Paragraph>Grafisk design & kommunikation, 180 hp</Paragraph>
              </Div>
            </Col>
            <Col size="6">
              <Div m={{ x: "1rem" }}>
                <Subheader>År & skola</Subheader>
                <Paragraph>2015-2016, Lernia yrkeshögskola.</Paragraph>
                <Paragraph>2007-2010, Tekniska högskolan vid Linköpings universitet.</Paragraph>
              </Div>
            </Col>
          </Row>

          <Row>
            <Col size="6">
                <Subheader>Arbetslivserfarenhet</Subheader>
                <Paragraph>Frontendutvecklare, Metamatrix AB</Paragraph>
                <Paragraph>Produktavdelningen, Fyndiq AB</Paragraph>
                <Paragraph>AD-assistent, Klapp.co</Paragraph>
            </Col>
            <Col size="6">
              <Div m={{ x: "1rem" }}>
                <Subheader>Arbetsuppgifter</Subheader>
                <Paragraph>JavaScript, Html, CSS, webbtillgänglighet, 
                  Episerver, Umbraco.
                </Paragraph>
                <Paragraph>Koordinering och ansvar för granskning av produktsortimentet. </Paragraph>
                <Paragraph>Arbete med trycksaksproduktion, layout & tryckanpassning.</Paragraph>
              </Div>
            </Col>
          </Row>
        </Container>
        
        );
    }
}