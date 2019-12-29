import React from "react";
import { ThemeProvider, Div, Anchor, Tag,Col, SideDrawer, Row, Container, Text, Image, Button, Icon } from "atomize";
import Switcher from "../../components/switch"
import Pdf from '../Menu/Cv_sw.pdf';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const BasicSideDrawer = ({ isOpen, onClose }) => {
  return (
    <SideDrawer isOpen={isOpen} onClose={onClose} p={{y:"3rem", l:"2rem"}}>

        <nav>
          <ul className="main-nav-list">
            <li>
            <Icon name="Home" color="brandprimary" size="21px" m={{ r: "0.5rem" }} />
              <Link onClick={onClose} to="/">Hem</Link>
            </li>
            <li>
                <Icon name="Github" color="brandprimary" size="21px" m={{ r: "0.5rem" }} />
                <Link onClick={onClose} to="/projects">Projekt</Link>
            </li>
            <li>
            <Icon name="Rename" color="brandprimary" size="21px" m={{ r: "0.5rem" }} />
            <a href = {Pdf} target = "_blank">CV</a>
            </li>
            <li>
                <Icon name="Message" color="brandprimary" size="21px" m={{ r: "0.5rem" }} />
              <Link onClick={onClose} to="/contact">Kontakt</Link>
            </li>
          </ul>
        </nav>

        <Div m={{ t: "3rem"}}>
            <Switcher/>
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