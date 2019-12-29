
import React from "react";
import { Switch, Label, Div, Button, Modal, Icon, Text, Input, Textarea } from "atomize";

class Switches extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        selectedSwitchValue: false
      };
    }

    render() {
        const { selectedSwitchValue } = this.state;

        return (
            <Label
              onClick={() =>
                this.setState({ selectedSwitchValue: !selectedSwitchValue })
              }
              align="center"
              textWeight="700"
              textSize="subheader"
              m={{ b: "1rem" }}
              >
              <Switch
                checked={selectedSwitchValue}
                inactiveColor="gray600"
                activeColor="brandprimary"
                activeShadow="5"
              />
              Välj mörkt tema
            </Label>
        );
    }
}

export default Switches; 