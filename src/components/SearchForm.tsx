/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

import { FC, useState, memo } from 'react';
import { ISearchFormBuy, ISearchFormRent } from "interfaces/index";

import Router from "next/router";

import Form from "src/styles/Form.module.css";
import DropDownComponent from "src/components/DropDownComponent";
import SliderComponent from "src/components/slider";

const SearchForm : FC<ISearchFormBuy> = ({ cityList, streetList, updateStreet }) => {

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
                            Label="Cidade"
                            ListOptions={cityList}
                            updateSimbling={updateStreet}
                        /> 
                        <DropDownComponent 
                            Label="Bairro"
                            ListOptions={streetList}
                        /> 
                        
                        <SliderComponent 
                            Label="Valor (R$)"
                            
                        />
                        
                        <Flex>
                            <DropDownComponent 
                                Label="Qtd. Quartos"
                                ListOptions={[
                                    "2+",
                                    "3+",
                                    "4+",
                                    "5+",
                                    "6+",
                                    "7+",
                                    "8+",
                                    "9+",
                                    "10+"
                                ]}
                                extraStyles={{
                                    paddingRight: 25  
                                }}
                                defaultValue={"1+"}
                            />  

                            <DropDownComponent 
                                Label="Qtd. Banheiros"
                                ListOptions={[
                                    "2+",
                                    "3+",
                                    "4+",
                                    "5+",
                                    "6+",
                                    "7+",
                                    "8+",
                                    "9+",
                                    "10+"
                                ]}
                                defaultValue={"1+"}
                            />
                        </Flex>
                        <DropDownComponent 
                            Label="Vagas"
                            ListOptions={[
                                "2+",
                                "3+",
                                "4+",
                                "5+",
                                "6+",
                                "7+",
                                "8+",
                                "9+",
                                "10+"
                            ]}
                            defaultValue={"1+"}
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
                            Label="Cidade"
                            ListOptions={cityList}
                            updateSimbling={updateStreet}
                        /> 
                        <DropDownComponent 
                            Label="Bairro"
                            ListOptions={streetList}
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
                                Label="Qtd. Quartos"
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
