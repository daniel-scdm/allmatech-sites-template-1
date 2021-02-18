/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react';
import { IDropDown } from "interfaces/index";

import Form from "src/styles/Form.module.css";

const DropdownComponent : React.FC<IDropDown> = ({ Label, ListOptions, extraStyles, extraDropdownStyles }) => {

    return (
        <div className={Form.DropDownContainer}
            sx={extraStyles}
        >
            <label>
                {Label}
            </label>
            <select
                sx={extraDropdownStyles}
            >
                <option>Local</option>
                {ListOptions.map(opt => <option>{opt}</option>)}
            </select>
        </div>   
    );
}

export default DropdownComponent;
