import React from "react";
import { ThemeProvider, Div, Col, Row, Container, Text, Image, Button, Icon } from "atomize";
import Drawer from "../Menu";

export default class Footer extends React.Component {
    render(){
        return (
        <Div bg="darkgray" d="flex" justify="center" align="center" p={{ x: { xs: '1rem', md: '2rem' }, y: { xs: '1rem', md: '2rem' }}}>
              <Text 
                      tag="p" 
                      textSize="body" 
                      textColor="white"
                      >
                    Copyright 2019 Sandra Widmark
              </Text>
        </Div>
        
        );
    }
}