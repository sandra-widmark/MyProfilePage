import React from "react";
import { Div, Col, Row, Container, Text} from "atomize";
import CVImage from "./images/sandra2.png"


export default class AboutSection extends React.Component {
    render(){
        return (
        <Container align="left" justify="space-between" p={{ x: { xs: '1.5rem', md: '3rem' }, y: { xs: '1.5rem', md: '3rem' }}}>
            <Row>
            <Col size={{ xs: 12, md: 8 }}>
              <Div>
              <Text 
                      tag="h2" 
                      textSize={{ xs: "title", md: "display1" }}
                      textColor="brandprimary"
                      m={{ y: { xs: '0', md: '1.5rem' }}}
                      >
                    Jag vill bidra till något större!
              </Text>
              <Text 
                tag="p" 
                textSize={{ xs: "subheader", md: "title" }}
                textColor="darkgray"
                m={{ y: { xs: '1rem', md: '0' }}}
                >
                Jag är utbildad inom inom frontend med fokus på JavaScript och har även en kandidatexamen i grafisk design och kommunikation. Jag drivs mycket av att få tänka både logiskt och estetiskt i min roll som frontendutvecklare, och även att kunna bidra till något som skapar värde för andra människor eller världen i stort. 
                </Text>
              </Div>
            </Col>
            <Col size={{ xs: 12, md: 4}}>
              <Div m={{ x: "1rem" }}>
                <img alt="" className="profile-picture" src={CVImage} />
              </Div>
            </Col>
          </Row>
        </Container>
        
        );
    }
}