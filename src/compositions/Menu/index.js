import React from "react";
import { ThemeProvider, Div, Anchor, Tag,Col, SideDrawer, Row, Container, Text, Image, Button, Icon } from "atomize";
import Switch from "../../components/switch"

const BasicSideDrawer = ({ isOpen, onClose }) => {
  return (
    <SideDrawer isOpen={isOpen} onClose={onClose} p={{y:"3rem", l:"2rem"}}>
        <nav>
            <ul className="main-nav-list">
                <li>
                    <Anchor href="https://www.google.com" target="_blank">
                        <Tag
                            bg="transparent"
                            m={{ r: "1rem", b: "1rem" }}
                            prefix={<Icon name="Home" color="brandprimary" size="21px" m={{ r: "0.5rem" }} />}
                            cursor="pointer"
                            textSize="title"
                            textWeight="700"
                            textColor="brandprimary"
                        >
                            Hem
                        </Tag>
                    </Anchor>
                </li>
                <li>
                    <Anchor href="https://www.google.com" target="_blank">
                        <Tag
                            bg="transparent"
                            m={{ r: "1rem", b: "1rem" }}
                            prefix={<Icon name="Github" color="brandprimary" size="21px" m={{ r: "0.5rem" }} />}
                            cursor="pointer"
                            textSize="title"
                            textWeight="700"
                            textColor="brandprimary"
                        >
                            Projekt
                        </Tag>
                    </Anchor>
                </li>
                <li>
                    <Anchor href="https://www.google.com" target="_blank">
                        <Tag
                            bg="transparent"
                            m={{ r: "1rem", b: "1rem" }}
                            prefix={<Icon name="Rename" color="brandprimary" size="21px" m={{ r: "0.5rem" }} />}
                            cursor="pointer"
                            textSize="title"
                            textWeight="700"
                            textColor="brandprimary"
                        >
                            CV
                        </Tag>
                    </Anchor>
                </li>
                <li>
                    <Anchor href="https://www.google.com" target="_blank">
                        <Tag
                            bg="transparent"
                            m={{ r: "1rem", b: "1rem" }}
                            prefix={<Icon name="Message" color="brandprimary" size="21px" m={{ r: "0.5rem" }} />}
                            cursor="pointer"
                            textSize="title"
                            textWeight="700"
                            textColor="brandprimary"
                        >
                            Kommentera
                        </Tag>
                    </Anchor>
                </li>
            </ul>
        </nav>
        <Div m={{ t: "2rem"}}>
            <Switch/>
        </Div>
    </SideDrawer>
  );
};

class Drawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawer: false
    };
  }

  render() {
    const { showSideDrawer } = this.state;

    return (
      <>
        <Button
          bg="transparent"
          m={{ r: "0.5rem" }}
          onClick={() => this.setState({ showSideDrawer: true })}
        >
        <Icon name="Menu" size="40px" color="brandprimary" />
        </Button>
        <BasicSideDrawer
          isOpen={showSideDrawer}
          onClose={() => this.setState({ showSideDrawer: false })}
        />
      </>
    );
  }
}

export default Drawer;