import React from "react";
import { Div, Col, Text, Image, Button, Icon } from "atomize";


export default class Paragraph extends React.Component {
    render(){
        return (
            <Text 
                tag="p" 
                textSize="subheader" 
                textColor="black"
                m={{ y: "0.5rem" }}
                >
                {this.props.children}  
            </Text> 
        );
    }
}
