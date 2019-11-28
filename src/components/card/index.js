import React from "react";
import { Div, Col, Text, Image, Button, Icon } from "atomize";


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
                    <Button
                        prefix={
                        <Icon
                            name="Github"
                            size="20px"
                            color="white"
                            m={{ r: "0.5rem" }}
                        />
                        }
                        bg="warning700"
                        hoverBg="warning800"
                        rounded="circle"
                        p={{ r: "1.5rem", l: "1rem" }}
                        shadow="3"
                        hoverShadow="4"
                        >       
                        Se projektet
                    </Button>
                    </Div>
                </Div>
            </Col>
        );
    }
}