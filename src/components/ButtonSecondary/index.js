import React from "react";
import { Div, Col, Text, Image, Button, Icon } from "atomize";


export default class ButtonSecondary extends React.Component {
    render(){
        return (
            <Button
                h="3rem"
                p={{ x: "1.75rem" }}
                bg="transparent"
                rounded="circle"
                textSize="subheader"
                textColor={this.props.color}
                border="2px solid"
                borderColor={this.props.color} 
                hoverBg= {this.props.hoverbg} 
                hoverTextColor={this.props.hovercolor}
                >       
                {this.props.text}
            </Button>
        );
    }
}
