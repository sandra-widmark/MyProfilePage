import React from "react";
import { Div, Col, Text, Image, Button, Icon } from "atomize";


export default class ButtonPrimary extends React.Component {
    render(){
        return (
            <Button
                h="3rem"
                p={{ x: "1.75rem" }}
                bg="brandsecondary"
                rounded="circle"
                textSize="subheader"
                shadow="3"
                textColor="black"
                hoverShadow="4"
                hoverBg="warning700"
                >       
                {this.props.text}
            </Button>
        );
    }
}
