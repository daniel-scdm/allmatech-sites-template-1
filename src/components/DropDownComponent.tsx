/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react';
import { IDropDown } from "interfaces/index";

import Form from "src/styles/Form.module.css";

const DropdownComponent : React.FC<IDropDown> = ({ Label, ListOptions, extraStyles, extraDropdownStyles, updateSimbling, defaultValue, onChangeValue, selectedValue, KeyName }) => {

    const handleChange = (event : React.FormEvent<HTMLSelectElement>) => {
        if(event.target && event.target.value && updateSimbling) 
            updateSimbling(event.target.value);
        
        onChangeValue(event.target.value, KeyName);
    }

    return (
        <div className={Form.DropDownContainer}
            sx={extraStyles}
        >
            <label>
                {Label}
            </label>
            <select
                sx={extraDropdownStyles}
                onChange={handleChange}
                value={selectedValue}
            >
                <option>{defaultValue ? defaultValue : "Todos"}</option>                
                {ListOptions && ListOptions.map((opt, index) => <option key={index.toString()}>{opt}</option>)}
            </select>
        </div>   
    );
}

export default DropdownComponent;
