import React from 'react';
import { Div, Text } from "atomize";
import Drawer from "../Menu";

export default class Header extends React.Component {   
    render(){
       return (
        <Div d="flex" bg="white" align="center" justify="space-between" shadow="2" p={{ x: { xs: '1rem', md: '2rem' }, y: { xs: '1rem', md: '2rem' }}}>
              <Text 
                tag="h2" 
                textSize={{ xs: "subheader", md: "title" }}
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