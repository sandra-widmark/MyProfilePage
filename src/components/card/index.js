import React from "react";
import { Div, Col, Text, Image, Button, Icon } from "atomize";
import ButtonPrimary from "../../components/ButtonPrimary"


export default class Card extends React.Component {
    render(){
        return (
            <Col>
                <Div
                    bg="white"
                    p={{ y: '2rem', x:'2.5rem'}}
                    rounded="xl"
                    shadow="3"
                    m={{ y: '1rem', r:"1rem"}}
                    minH="90%"
                    >
                    <Text 
                    tag="h2" 
                    textSize="display1" 
                    m={{ x: '1rem', b: '0,5rem'}}
                    textColor="brandprimary"
                    >
                    {this.props.title}
                    </Text>

                    <Text 
                    tag="p" 
                    textSize="title" 
                    m={{ x: '1rem', b: '1.5rem' }}
                    textColor="darkgray"
                    >
                    {this.props.description}
                    </Text>
                    
                    <Div d="flex" justify="flex-end">
                    <ButtonPrimary text="Se projektet" link={this.props.link}></ButtonPrimary>
                    </Div>
                </Div>
            </Col>
        );
    }
}