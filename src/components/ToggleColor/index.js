import React, { useState } from 'react';
import { Div, Button, Switch, Label } from "atomize";
import ButtonSecondary from "../../components/ButtonSecondary"

const ToggleColor = ({ toggleColorTheme  }) => {

    return (
      <Div bg="white" p={{ x: { xs: '1.5rem', md: '2rem' }, y: { xs: '1rem', md: '1rem' }}}>
        <ButtonSecondary click={toggleColorTheme } hoverbg="brandprimary" hovercolor="white" color="brandprimary" text="Välj färgtema"></ButtonSecondary>
      </Div>
    );
  };

  export default ToggleColor;







 
