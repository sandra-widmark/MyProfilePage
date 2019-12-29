import React from "react";
import { Div, Col, Text, Image, Button, Icon } from "atomize";


export default class Subheader extends React.Component {
    render(){
        return (
            <Text 
                tag="h3" 
                textSize="subheader" 
                textColor="black"
                m={{ b: "1rem", t: "1.5rem"}}
                >
                {this.props.children}  
            </Text>
        );
    }
}
