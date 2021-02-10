/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

import { FC, useState, memo } from 'react';
import { ISearchForm } from "interfaces/index";

import Form from "src/styles/Form.module.css";
import DropDownComponent from "src/components/DropDownComponent";

const SearchForm : FC<ISearchForm> = () => {

    const [selectdTab, setSelectdTab] = useState(true);

    return (
        <div className={Form.form}>
            <ul>
                <li 
                    sx={{
                        backgroundColor: selectdTab ?  "#00205c" : "#444"
                    }}
                    onClick={() => setSelectdTab(true)}
                >
                    Venda
                </li>
                <li
                    sx={{
                        backgroundColor: !selectdTab ?  "#00205c" : "#444"
                    }}
                    onClick={() => setSelectdTab(false)}
                >
                    Aluguel
                </li>
            </ul>
            <div className={Form.baseTab}></div>
            <div className={Form.container}>
                {selectdTab && (
                    <form>
                        <DropDownComponent 
                            Label="Local"
                            ListOptions={[]}
                        /> 
                        <Flex>
                            <DropDownComponent 
                                Label="Preço minimo"
                                ListOptions={[]}
                            />  

                            <DropDownComponent 
                                Label="Preço maximo"
                                ListOptions={[]}
                            />
                        </Flex>
                          
                        <Flex>
                            <DropDownComponent 
                                Label="Quartos minimo"
                                ListOptions={[]}
                            />  

                            <DropDownComponent 
                                Label="Quartos maximo"
                                ListOptions={[]}
                            />
                        </Flex>
                        <DropDownComponent 
                            Label="Banheiros"
                            ListOptions={[]}
                        />  

                        <input 
                            type="submit" 
                            value="Buscar" 
                            className={Form.SubmitButton}
                        />                   
                    </form>
                )}

                {!selectdTab && (
                    <form>
                        <DropDownComponent 
                            Label="Local"
                            ListOptions={[]}
                        />                   
                    </form>
                )}
                
            </div>
        </div>   
    );
}

export default memo(SearchForm);
