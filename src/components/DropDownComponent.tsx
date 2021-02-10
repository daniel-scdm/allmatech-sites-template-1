/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react';
import { IDropDown } from "interfaces/index";

import Form from "src/styles/Form.module.css";

const DropdownComponent : React.FC<IDropDown> = ({ Label, ListOptions }) => {

    return (
        <div className={Form.DropDownContainer}>
            <label>
                {Label}
            </label>
            <select>
                <option>Local</option>
                {ListOptions.map(opt => <option>{opt}</option>)}
            </select>
        </div>   
    );
}

export default DropdownComponent;
