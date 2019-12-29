import React from "react";
import { ThemeProvider, Div, Col, Row, Container, Text, Image, Button, Icon } from "atomize";
import Card from "../../components/card";
import UpdateModal from "../../components/modal/modal"

export default class IntroSection extends React.Component {
    render(){
        return (
       <Container d="flex" flexDir="column" justify="space-between" p={{ x: { xs: '2rem', md: '3rem' }, y: { xs: '2rem', md: '3rem' }}}>
            <Text 
                    tag="h2" 
                    textSize="display2" 
                    textColor="darkgray"
                    textWeight="900"
                    m={{ b: '1rem' }}
                    >
                    Github-projekt
            </Text>
              <Row>
                <Div d="flex" flexWrap="wrap" className="card-container">
                  <Card name="MERN App" description="Lorem ipusm dolor sit amet" />
                  <Card name="MERN App" description="Lorem ipusm dolor sit amet"/>
                  <Card name="MERN App" description="Lorem ipusm dolor sit amet"/>
                </Div>
              </Row>
 {/*              <Row>
                <UpdateModal/>
              </Row> */}
            </Container>
        );
    }
}