import React from "react";
import { Div, Col, Text, Image, Button, Icon } from "atomize";
import ButtonSecondary from "../../components/ButtonSecondary"


export default class Card extends React.Component {
    render(){
        return (
            <Col>
                <Div
                    bg="white"
                    p="1rem"
                    rounded="md"
                    shadow="3"
                    m="1rem"
                    >
                    <Text 
                    tag="h2" 
                    textSize="display1" 
                    m={{ xs: '1rem', md: '1rem' }}
                    textColor="black"
                    >
                    {this.props.name}
                    </Text>

                    <Text 
                    tag="p" 
                    textSize="body" 
                    m={{ xs: '1rem', md: '1rem' }}
                    textColor="black"
                    >
                    {this.props.description}
                    </Text>
                    
                    <Div d="flex">
                    <ButtonSecondary icon="Github" text="Se projektet"></ButtonSecondary>
                    </Div>
                </Div>
            </Col>
        );
    }
}