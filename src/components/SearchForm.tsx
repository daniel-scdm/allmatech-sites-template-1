/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

import { FC, useState, memo } from 'react';
import { ISearchForm } from "interfaces/index";

import Router from "next/router";

import Form from "src/styles/Form.module.css";
import DropDownComponent from "src/components/DropDownComponent";

const SearchForm : FC<ISearchForm> = () => {

    const [selectdTab, setSelectdTab] = useState(true);

    const handleSearch = () => {
        Router.push("/list")
    }


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
                    <form onSubmit={handleSearch}>
                        <DropDownComponent 
                            Label="Local"
                            ListOptions={[]}
                        /> 
                        <Flex>
                            <DropDownComponent 
                                Label="Preço minimo"
                                ListOptions={[]}
                                extraStyles={{
                                    paddingRight: 25  
                                }}
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
                                extraStyles={{
                                    paddingRight: 25  
                                }}
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
                    <form onSubmit={handleSearch}>
                        <DropDownComponent 
                            Label="Local"
                            ListOptions={[]}
                        /> 
                        <Flex>
                            <DropDownComponent 
                                Label="Preço minimo"
                                ListOptions={[]}
                                extraStyles={{
                                    paddingRight: 25  
                                }}
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
                                extraStyles={{
                                    paddingRight: 25  
                                }}
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
                
            </div>
        </div>
    );
}

export default memo(SearchForm);