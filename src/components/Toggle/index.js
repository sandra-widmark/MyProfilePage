import React, { useState } from 'react';
import { Switch, Label, Div, Button, Modal, Icon, Text, Input, Textarea } from "atomize";

const Toggle = ({ toggleTheme }) => {

    const selected = true;
    const notSelected = false; 
    const [selectedSwitchValue, setSelection] = useState('false');

    const toggleSelection = () => {
        if(selectedSwitchValue === 'false'){
          setSelection('true');
        } else {
          setSelection('false'); 
        }
      }

      function changeTheme() {
          toggleTheme()
          toggleSelection()
      }

    return (
         <Label
              onClick={changeTheme}
              align="center"
              textWeight="700"
              textSize="subheader"
              textColor="darkgray"
              bg="white"
              p={{ y: "1rem", x: "2rem" }}
              >
              <Switch

              checked={selectedSwitchValue === 'false' ? selected : notSelected}
                inactiveColor="gray600"
                activeColor="brandprimary"
                activeShadow="5"
              />
              Ljust/mörkt tema
            </Label>
    );
  };


  
  export default Toggle;






 
