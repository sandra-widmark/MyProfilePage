import React from "react";
import { Button, Anchor } from "atomize";


export default class ButtonSecondary extends React.Component {
    render(){
        return (
            <Anchor href={this.props.link}>
                <Button
                    h="3rem"
                    p={{ x: "1.75rem" }}
                    bg="transparent"
                    rounded="circle"
                    textSize={{ xs: "body", md: "subheader" }}
                    textColor={this.props.color}
                    border="2px solid"
                    borderColor={this.props.color} 
                    hoverBg= {this.props.hoverbg} 
                    hoverTextColor={this.props.hovercolor}
                    minW={{ xs: '100%', md: 'auto' }}
                    >       
                    {this.props.text}
                </Button>
            </Anchor>
        );
    }
}
