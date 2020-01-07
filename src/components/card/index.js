import React from "react";
import { Div, Col, Text } from "atomize";
import ButtonPrimary from "../../components/ButtonPrimary"


export default class Card extends React.Component {
    render(){
        return (
            <Col>
                <Div
                    bg="white"
                    p={{ y: { xs: '1rem', md: '2rem' }, x: { xs: '1rem', md: '2rem' }}}
                    m={{ y: { xs: '0.5rem', md: '0.5rem' }}}
                    rounded="xl"
                    shadow="3"
                    minH="90%"
                    >
                    <Text 
                    tag="h2" 
                    textSize={{ xs: "title", md: "display1" }}
                    textColor="brandprimary"
                    >
                    {this.props.title}
                    </Text>

                    <Text 
                    tag="p" 
                    textSize="title" 
                    m={{ b: '1.5rem' }}
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