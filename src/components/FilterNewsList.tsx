/** @jsx jsx */
import { jsx } from 'theme-ui';

import React, { memo } from "react";

import Section from 'src/styles/Section.module.css';
import Form from 'src/styles/Form.module.css';

import { IFilterNewsList } from "interfaces";
import InputTextComponent from "src/components/InputTextComponent";

const FilterNewsList : React.FC<IFilterNewsList> = ({ callbackList }) => {
  
    const submitForm = (e : React.FormEvent) => {
        callbackList(e);
    }

    return (
        <div className={Section.filterForm}>
            <form className={Section.filterList} onSubmit={submitForm}>
                
                <InputTextComponent 
                    Label="Titulo"
                    nameField="titulo"
                    placeholder="Titulo"
                    onChange={() => {}}
                    value={""}
                />

                <input 
                    type="submit" 
                    value="Buscar" 
                    className={Form.SubmitButton}
                />
            </form>
        </div>
    );
}

export default memo(FilterNewsList);