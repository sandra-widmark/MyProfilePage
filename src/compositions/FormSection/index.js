import React, { useState, prevState } from 'react';
import { ThemeProvider, Div, Col, Row, Container, Text, Image, Button, Icon, Input, Textarea } from "atomize";
import ButtonSecondary from "../../components/ButtonSecondary"

export const ToggleTheme = ({ setUserTheme }) => {
  return (
       <button
            onClick={setUserTheme}
            align="center"
            textWeight="700"
            textSize="subheader"
            textColor="darkgray"
            bg="white"
            p={{ y: "1rem", x: "2rem" }}
            >
            Uppdatera färgtema
          </button>
  );
};

export default class FormSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      colorTheme: ''
    };

    this.handleChangeInput1 = this.handleChangeInput1.bind(this);
    this.handleChangeInput2 = this.handleChangeInput2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInput1(event) {
    this.setState({value1: event.target.value });
  }

  handleChangeInput2(event) {
    this.setState({value2: event.target.value});
  }

  handleSubmit(event) {

    let colorTheme = {
      colors: {
        brandprimary: this.state.value1,
        brandsecondary: this.state.value1,
        gray: this.state.value2,
        darkgray: this.state.value1,
        white: this.state.value2
      }
    };

    this.setState({
        colorTheme : colorTheme
    })

    console.log(this.state.value1,this.state.value2, this.state.colorTheme);

    event.preventDefault();
  }

  render() {
    
    return (
        <Container d="flex" justify="space-around"  p={{ x: { xs: '2rem', md: '3rem' }, y: { xs: '2rem', md: '3rem' }}}>
            <Div
              bg="white"
              p="2.5rem"
              rounded="xl"
              shadow="3"
              m="1rem"
              >

                <Text 
                tag="h2" 
                textSize="display1" 
                textWeight="900"
                textColor="darkgray"
                >
              Välj färgtema för webbplatsen
              </Text>

                <form onSubmit={this.handleSubmit}>
                  <Div m={{ r: "1rem", y: "1rem"}}>
                    <label for="color1">Färg 1</label>
                    <input type="color" id="color1" name="color1" value={this.state.value1} onChange={this.handleChangeInput1} />
                  </Div>
                  <Div m={{ r: "1rem", y: "1rem"}}>
                    <label for="color2">Färg 2</label>
                    <input type="color" id="color2" name="color2" value={this.state.value2} onChange={this.handleChangeInput2} />
                  </Div>
                  <Div d="flex" justify="flex-end" m={{ t: "2rem"}}>
                    <ButtonSecondary hoverbg="brandprimary" hovercolor="white" color="brandprimary" text="Välj färgtema"></ButtonSecondary>
                  </Div>
                </form>
                
                      
            </Div>
        </Container>
    );
  }
}
