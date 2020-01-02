import React from "react";
import { Div, Col, Text, Image, Button, Anchor, Icon } from "atomize";


export default class ButtonSecondary extends React.Component {
    render(){
        return (
            <Anchor href={this.props.link}>
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
            </Anchor>
        );
    }
}
