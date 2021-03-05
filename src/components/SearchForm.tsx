/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

import { FC, useState, memo } from 'react';
import { ISearchFormBuy, ISearchFormRent } from "interfaces/index";
import { useForm } from "src/hooks/useForm";

import Router from "next/router";

import Form from "src/styles/Form.module.css";
import DropDownComponent from "src/components/DropDownComponent";
import SliderComponent from "src/components/slider";

const SearchForm : FC<ISearchFormBuy> = ({ cityList, streetList, updateStreet }) => {

    const [selectdTab, setSelectdTab] = useState(true);

    const { buyValues, handleChangeBuy } = useForm({
        cidade: "",
        bairro: "",
        valores: [0, 200000000],
        quartos: 0,
        banheiros: 0,
        garagem: 0
    }, () => {});

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
                            selectedValue={buyValues["cidade"]}
                            updateSimbling={updateStreet}
                            onChangeValue={handleChangeBuy}
                            KeyName="cidade"
                        /> 
                        <DropDownComponent 
                            Label="Bairro"
                            ListOptions={streetList}
                            selectedValue={buyValues["bairro"]}
                            onChangeValue={handleChangeBuy}
                            KeyName="bairro"
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
                                selectedValue={buyValues["quartos"] + "+"}                                
                                extraStyles={{
                                    paddingRight: 25  
                                }}
                                onChangeValue={handleChangeBuy}
                                defaultValue={"1+"}
                                KeyName="quartos"
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
                                selectedValue={buyValues["banheiros"] + "+"}                                
                                onChangeValue={handleChangeBuy}
                                defaultValue={"1+"}
                                KeyName="banheiros"
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
                            selectedValue={buyValues["garagem"] + "+"}                                
                            onChangeValue={handleChangeBuy}
                            KeyName="garagem"
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
