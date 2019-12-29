import React from "react";
import { ThemeProvider, Div, Col, Row, Container, Text, Image, Button, Icon } from "atomize";
import Drawer from "../Menu";

export default class Header extends React.Component {
    render(){
        return (
        <Div d="flex" align="center" justify="space-between" shadow="3" p={{ x: { xs: '1rem', md: '2rem' }, y: { xs: '1rem', md: '2rem' }}}>
              <Text 
                      tag="h2" 
                      textSize="title" 
                      textColor="brandprimary"
                      textWeight="900"
                      >
                    Sandra Widmark
              </Text>
              <Drawer/>
        </Div>
        
        );
    }
}