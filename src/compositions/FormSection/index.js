import React from "react";
import { ThemeProvider, Div, Col, Row, Container, Text, Image, Button, Icon, Input, Textarea } from "atomize";
import Paragraph from "../../components/Paragraph"
import Subheader from "../../components/Subheader"
import ButtonSecondary from "../../components/ButtonSecondary"

const TitleInput = () => {
  return (
    <Input placeholder="" />
  );
}

const DescriptionInput = () => {
  return (
    <Textarea placeholder="" />
  );
}

const WeightInput = () => {
  return (
    <Input placeholder="Vikt" />
  );
}

export default class FormSection extends React.Component {
    render(){
        return (
        <Container d="flex" justify="space-between"  p={{ x: { xs: '2rem', md: '3rem' }, y: { xs: '2rem', md: '3rem' }}}>
          <Div bg="gray" p="2.5rem" rounded={{ tr: "xl"}}>
            <Div
                      bg="white"
                      p="2.5rem"
                      rounded="xl"
                      shadow="3"
                      m="1rem"
                      >

                    <Text 
                    tag="h2" 
                    textSize="display2" 
                    textWeight="900"
                    textColor="darkgray"
                    m={{ y: "1.5rem" }}
                    >
                  Skriv en kommentar
                </Text>
                  <Text p={{ t: "0.5rem", b: "0.5rem" }} textSize="subheader">
                  Namn
                </Text>
                <TitleInput/>
                <Text p={{ t: "0.5rem", b: "0.5rem" }} textSize="subheader">
                  Kommentar
                </Text>
                <DescriptionInput/>
                <Div d="flex" m={{ b: "4rem" }}>
                </Div>
              <Div d="flex" justify="flex-end">
                <ButtonSecondary color="brandprimary" text="Kommentera"></ButtonSecondary>
              </Div>
                      
            </Div>
          </Div>
          <Div
                    bg="white"
                    p="2.5rem"
                    >

                  <Text 
                  tag="h2" 
                  textSize="display2" 
                  textWeight="900"
                  textColor="darkgray"
                  m={{ y: "1.5rem" }}
                  >
                Kommentarer
              </Text>
                <Text p={{ t: "0.5rem", b: "0.5rem" }} textSize="subheader">
                Namn
              </Text>
              <Text p={{ t: "0.5rem", b: "0.5rem" }} textSize="subheader">
                Kommentar lorem ipsum dolor sit amet
              </Text>
              <Div d="flex" m={{ b: "4rem" }}>
              </Div>    
          </Div>
        </Container>
        );
    }
}

