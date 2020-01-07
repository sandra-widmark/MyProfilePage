import React from "react";
import { Div, Text } from "atomize";

export default class Footer extends React.Component {
    render(){
        return (
        <Div bg="white" d="flex" justify="center" align="center" p={{ x: { xs: '1rem', md: '2rem' }, y: { xs: '1rem', md: '2rem' }}}>
              <Text 
                      tag="p" 
                      textSize="body" 
                      textColor="brandprimary"
                      >
                    Copyright 2019 Sandra Widmark
              </Text>
        </Div>
        
        );
    }
}