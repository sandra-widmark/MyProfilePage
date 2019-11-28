import React from "react";
import { Div, Col, Text, Image, Button, Icon } from "atomize";

const ButtonPrimary = props => {
    return <Button
    suffix={
    <Icon
        name="Rename"
        size="16px"
        color="warning700"
        m={{ l: "1rem" }}
    />
    }
    h="4rem"
    p={{ x: "1.75rem" }}
    bg="transparent"
    hoverBg="black700"
    rounded="circle"
    textSize="title"
    p={{ r: "2rem", l: "2rem" }}
    m={{ r: "3rem"}}
    shadow="3"
    textColor="warning700"
    hoverShadow="4"
    border="1px solid"
    borderColor="warning700"
    >       
    {props.children}
    </Button>
};


export default ButtonPrimary; 
