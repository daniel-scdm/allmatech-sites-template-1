/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react';
import { IDropDown } from "interfaces/index";

import Form from "src/styles/Form.module.css";

const SearchForm : React.FC<IDropDown> = () => {

    return (
        <div className={Form.form}>
            <label>
                Local
            </label>
            <input placeholder="Local"/>
        </div>   
    );
}

export default SearchForm;
