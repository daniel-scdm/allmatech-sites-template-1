/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react';
import { IInputText } from "interfaces";

import Form from "src/styles/Form.module.css";

const DropdownComponent : React.FC<IInputText> = ({ Label, nameField, placeholder }) => {
    return (
        <div className={Form.DropDownContainer}>
            <label>
                {Label}
            </label>
            <input type="text" name={nameField} placeholder={placeholder}/>
        </div>   
    );
}

export default DropdownComponent;
