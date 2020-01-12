import React, { useState } from 'react';
import { Div, Container, Text, Label } from "atomize";
import ButtonSecondary from "../../components/ButtonSecondary"

export let userTheme = {}; 

const UserColorInput = ({setUserTheme}) => {

    return (
      
      <Container d="flex" justify="space-around"  p={{ x: { xs: '1.5rem', md: '3rem' }, y: { xs: '1.5rem', md: '3rem' }}}>
          <Div
            bg="white"
            p={{ x: { xs: '2rem', md: '2.5rem' }, y: { xs: '2rem', md: '2.5rem' }}}
            rounded="xl"
            shadow="3"
            >

              <Text 
              textSize={{ xs: "title", md: "display1" }}
              textWeight="900"
              textColor="darkgray"
              >
                Välj färgtema för webbplatsen
              </Text>
            <FormSection setUserTheme={setUserTheme}/>
        </Div>
    </Container>
    );
  };


  export default UserColorInput;

  
  export class FormSection extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        value1: '',
        value2: '',
      };
  
      this.handleChangeInput1 = this.handleChangeInput1.bind(this);
      this.handleChangeInput2 = this.handleChangeInput2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeInput1(event) {
      this.setState({value1: event.target.value });
    }

    handleChangeInput2(event) {
      this.setState({value2: event.target.value });
    }

    handleSubmit(event) { 
      event.preventDefault();
    }
  
    render() {

      userTheme = {
        colors: {
          brandprimary: this.state.value1,
          brandsecondary: "#FFC107",
          gray: this.state.value2,
          darkgray: "#15141F",
          white: "#fff"
        }
      };
      
      return (
    
          <form onSubmit={this.handleSubmit}>
            <Div m={{ r: "1.5rem", y: "1rem"}}>
              <Label textColor="darkgray" htmlFor="color">Färg 1</Label>
              <input type="color" id="color1" name="color1" value={this.state.value1} onChange={this.handleChangeInput1} />
            </Div>
            <Div m={{ r: "1.5rem", y: "1rem"}}>
              <Label textColor="darkgray" htmlFor="color">Färg 2</Label>
              <input type="color" id="color2" name="color2" value={this.state.value2} onChange={this.handleChangeInput2} />
            </Div>
            <Div d="flex" flexDir={{ xs: 'column', md: 'row' }} justify="flex-end" m={{ t: "2rem"}}>  
            <ButtonSecondary click={this.props.setUserTheme} hoverbg="brandprimary" hovercolor="white" color="brandprimary" text="Välj färgtema"></ButtonSecondary>
            </Div>
          </form>
      );
    }
  } 





 
