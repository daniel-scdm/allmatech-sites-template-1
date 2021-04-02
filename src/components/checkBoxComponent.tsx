/** @jsx jsx */
import { jsx, Flex, Checkbox } from 'theme-ui'

import React from 'react';
import { IInputCheck } from "interfaces";

const CheckBoxComponent : React.FC<IInputCheck> = ({ Label, nameField, value, onChange }) => {

    const handleChange = () => {
        onChange(Label);
    }

    return (
        <Flex>
            <Checkbox 
                id={Label}
                onChange={handleChange}
                checked={value}
            />
            <label htmlFor={Label}>{nameField}</label>
        </Flex>   
    );
}

export default CheckBoxComponent;
