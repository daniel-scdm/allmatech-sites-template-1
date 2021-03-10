/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

import { FC, useState, memo } from 'react';
import { ISearchFormBuy } from "interfaces";
import { useForm } from "src/hooks/useForm";

import { useRouter } from "next/router";

import Form from "src/styles/Form.module.css";
import DropDownComponent from "src/components/DropDownComponent";
import SliderComponent from "src/components/Slider";

const SearchForm : FC<ISearchFormBuy> = ({ cityList, streetListBuy, streetListRent, updateStreetBuy, updateStreetRent }) => {

    const [selectdTab, setSelectdTab] = useState(true);
    const router = useRouter();

    const formBuy = useForm({
        buy: true,
        cidade: "",
        bairro: "",
        valores: [0, 200000000],
        quartos: 0,
        banheiros: 0,
        garagem: 0
    }, () => submitFormBuy());

    const formRent = useForm({
        buy: false,
        cidade: "",
        bairro: "",
        valores: [0, 200000000],
        quartos: 0,
        banheiros: 0,
        garagem: 0
    }, () => submitFormRent());

    const submitFormBuy = () => {

        const filterOptions = {
            ...formBuy.formValues,
            tipoImovel: selectdTab 
        }

        router.push({
            pathname: "/list",
            query: filterOptions
        });
    }

    const submitFormRent = () => {

        const filterOptions = {
            ...formRent.formValues,
            tipoImovel: selectdTab 
        }

        router.push({
            pathname: "/list",
            query: filterOptions
        });
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
                    <form onSubmit={formBuy.handleForm}>
                        <DropDownComponent 
                            Label="Cidade"
                            ListOptions={cityList}
                            selectedValue={formBuy.formValues["cidade"]}
                            updateSimbling={updateStreetBuy}
                            onChangeValue={formBuy.handleChangeForm}
                            KeyName="cidade"
                        /> 
                        <DropDownComponent 
                            Label="Bairro"
                            ListOptions={streetListBuy}
                            selectedValue={formBuy.formValues["bairro"]}
                            onChangeValue={formBuy.handleChangeForm}
                            KeyName="bairro"
                        /> 
                        
                        <SliderComponent 
                            Label="Valor (R$)"   
                            values={formBuy.formValues["valores"]}  
                            onChangeValue={formBuy.handleSliderChange} 
                            errorMessage={formBuy.errMessage}                      
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
                                selectedValue={formBuy.formValues["quartos"] + "+"}                                
                                extraStyles={{
                                    paddingRight: 25  
                                }}
                                onChangeValue={formBuy.handleChangeForm}
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
                                selectedValue={formBuy.formValues["banheiros"] + "+"}                                
                                onChangeValue={formBuy.handleChangeForm}
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
                            selectedValue={formBuy.formValues["garagem"] + "+"}                                
                            onChangeValue={formBuy.handleChangeForm}
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
                    <form onSubmit={formRent.handleForm}>
                        <DropDownComponent 
                            Label="Cidade"
                            ListOptions={cityList}
                            selectedValue={formRent.formValues["cidade"]}
                            updateSimbling={updateStreetRent}
                            onChangeValue={formRent.handleChangeForm}
                            KeyName="cidade"
                        /> 
                        <DropDownComponent 
                            Label="Bairro"
                            ListOptions={streetListRent}
                            selectedValue={formRent.formValues["bairro"]}
                            onChangeValue={formRent.handleChangeForm}
                            KeyName="bairro"
                        /> 
                        
                        <SliderComponent 
                            Label="Valor (R$)"   
                            values={formRent.formValues["valores"]}  
                            onChangeValue={formRent.handleSliderChange} 
                            errorMessage={formRent.errMessage}                      
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
                                selectedValue={formRent.formValues["quartos"] + "+"}                                
                                extraStyles={{
                                    paddingRight: 25  
                                }}
                                onChangeValue={formRent.handleChangeForm}
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
                                selectedValue={formRent.formValues["banheiros"] + "+"}                                
                                onChangeValue={formRent.handleChangeForm}
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
                            selectedValue={formRent.formValues["garagem"] + "+"}                                
                            onChangeValue={formRent.handleChangeForm}
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
                
            </div>
        </div>
    );
}

export default memo(SearchForm);
