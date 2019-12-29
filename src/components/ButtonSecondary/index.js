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
                shadow="3"
                textColor={this.props.color}
                hoverShadow="4"
                border="2px solid"
                borderColor={this.props.color} 
                hoverBg= "white"
                hoverTextColor="brandprimary"
                >       
                {this.props.text}
            </Button>
        );
    }
}
