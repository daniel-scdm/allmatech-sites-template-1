/** @jsx jsx */
import { jsx } from 'theme-ui'

import React, { useState } from 'react';
import { IDropDown } from "interfaces/index";

import Form from "src/styles/Form.module.css";

const DropdownComponent : React.FC<IDropDown> = ({ Label, ListOptions, extraStyles, extraDropdownStyles, updateSimbling }) => {

    const [selected, setSelected] = useState("Todos");

    const handleChange = (event : React.FormEvent) => {
        if(event.target && event.target.value && updateSimbling) 
            updateSimbling(event.target.value);
        
        setSelected(event.target.value);

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
                value={selected}
            >
                <option>Todos</option>                
                {ListOptions && ListOptions.map((opt, index) => <option key={index.toString()}>{opt}</option>)}
            </select>
        </div>   
    );
}

export default DropdownComponent;
