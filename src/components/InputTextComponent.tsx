/** @jsx jsx */
import { jsx } from 'theme-ui'

import React, { FormEvent } from 'react';
import { IInputText } from "interfaces";

import Form from "src/styles/Form.module.css";

const DropdownComponent : React.FC<IInputText> = ({ Label, nameField, placeholder, value, onChange }) => {

    const handleChange = (e : FormEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value, nameField);
    }

    return (
        <div className={Form.DropDownContainer}>
            <label>
                {Label}
            </label>
            <input type="text" name={nameField} placeholder={placeholder} value={value} onChange={handleChange} maxLength={12} />
        </div>   
    );
}

export default DropdownComponent;
