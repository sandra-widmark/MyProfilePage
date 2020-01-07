import React from "react";
import { Anchor, Button } from "atomize";


export default class ButtonPrimary extends React.Component {
    render(){
        return (
            <Anchor href={this.props.link}>
                <Button
                    h="3rem"
                    p={{ x: "1.75rem" }}
                    bg="brandsecondary"
                    rounded="circle"
                    textSize={{ xs: "body", md: "subheader" }}
                    shadow="3"
                    textColor="black"
                    hoverShadow="4"
                    onClick={this.props.click} 
                    hoverBg="warning700"
                    minW={{ xs: '100%', md: 'auto' }}
                    >       
                    {this.props.text}
                </Button>
            </Anchor>
        );
    }
}
