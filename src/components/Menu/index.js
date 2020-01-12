import React from 'react';
import { SideDrawer, Button, Icon } from "atomize";
import Pdf from '../Menu/Cv_sw.pdf';

import {
    Link
  } from "react-router-dom";


const BasicSideDrawer = ({ isOpen, onClose }) => {

  return (
    <SideDrawer isOpen={isOpen} onClose={onClose} textColor="brandprimary" p={{y:"3rem", l:"2rem"}}>

        <nav>
          <ul className="main-nav-list">
            <li>
            <Icon name="Home" color="#6400E4" size="21px" m={{ r: "0.5rem" }} />
              <Link onClick={onClose} to="/">Hem</Link>
            </li>
            <li>
                <Icon name="Github" color="#6400E4" size="21px" m={{ r: "0.5rem" }} />
                <Link onClick={onClose} to="/projects">Projekt</Link>
            </li>
            <li>
            <Icon name="Rename" color="#6400E4" size="21px" m={{ r: "0.5rem" }} />
            <a href = {Pdf} target ="_blank" rel="noopener">CV</a>
            </li>
          </ul>
        </nav>
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
          p="0"
          onClick={() => this.setState({ showSideDrawer: true })}
        >
        <Icon name="Menu" size={{ xs: "30px", md: "40px" }} color="brandprimary" />
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