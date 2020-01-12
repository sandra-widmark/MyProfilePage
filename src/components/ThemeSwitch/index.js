import React, { useState } from 'react';
import { Switch, Label } from "atomize";

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
          textColor="white"
          bg="brandprimary"
          p={{ x: { xs: '1.5rem', md: '2rem' }, y: { xs: '1rem', md: '1rem' }}}
          >
          <Switch

          checked={selectedSwitchValue === 'false' ? selected : notSelected}
            inactiveColor="brandsecondary"
            activeColor="darkgray"
            activeShadow="5"
          />
          Ljust/mörkt tema
        </Label>
    );
  };


export default Toggle;






 
