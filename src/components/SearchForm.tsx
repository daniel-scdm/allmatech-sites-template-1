/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

import { FC, useState, memo } from 'react';
import { ISearchFormBuy } from "interfaces";
import { useForm } from "src/hooks/useForm";

import { useRouter } from "next/router";

import Form from "src/styles/Form.module.css";
import DropDownComponent from "src/components/DropDownComponent";
import SliderComponent from "src/components/Slider";

const SearchForm : FC<ISearchFormBuy> = ({ cityList, streetList, updateStreet }) => {

    const [selectdTab, setSelectdTab] = useState(true);
    const router = useRouter();

    const form = useForm({
        tipoImovel: selectdTab,
        cidade: "",
        bairro: "",
        tipo: "Todos os tipos",
        valores: [0, 200000000],
        quartos: 0,
        banheiros: 0,
        code: ""
    }, () => submitform());

    const submitform = () => {

        const filterOptions = {
            ...form.formValues,
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
                        backgroundColor: selectdTab ?  "primary" : "deactivated"
                    }}
                    onClick={() => setSelectdTab(true)}
                >
                    Venda
                </li>
                <li
                    sx={{
                        backgroundColor: !selectdTab ?  "primary" : "deactivated"
                    }}
                    onClick={() => setSelectdTab(false)}
                >
                    Aluguel
                </li>
            </ul>
            <div className={Form.baseTab} sx={{ backgroundColor: "primary" }}></div>
            <div className={Form.container}>
                <form onSubmit={form.handleForm}>
                    <DropDownComponent 
                        Label="Cidade"
                        ListOptions={cityList}
                        selectedValue={form.formValues["cidade"]}
                        updateSimbling={updateStreet}
                        onChangeValue={form.handleChangeForm}
                        KeyName="cidade"
                    /> 
                    <DropDownComponent 
                        Label="Bairro"
                        ListOptions={streetList}
                        selectedValue={form.formValues["bairro"]}
                        onChangeValue={form.handleChangeForm}
                        KeyName="bairro"
                    /> 
                    
                    <SliderComponent 
                        Label="Valor (R$)"   
                        values={form.formValues["valores"]}  
                        onChangeValue={form.handleSliderChange} 
                        errorMessage={form.errMessage}                      
                    />
                    
                    <Flex>
                        <DropDownComponent 
                            Label="Qtd. Quartos"
                            ListOptions={[
                                "1+",
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
                            selectedValue={form.formValues["quartos"] + "+"}                                
                            extraStyles={{
                                paddingRight: 25  
                            }}
                            onChangeValue={form.handleChangeForm}
                            defaultValue={"0+"}
                            KeyName="quartos"
                        />  

                        <DropDownComponent 
                            Label="Qtd. Banheiros"
                            ListOptions={[
                                "1+",
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
                            selectedValue={form.formValues["banheiros"] + "+"}                                
                            onChangeValue={form.handleChangeForm}
                            defaultValue={"0+"}
                            KeyName="banheiros"
                        />
                    </Flex>
                    <DropDownComponent 
                        Label="Vagas"
                        ListOptions={[
                            "1+",
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
                        selectedValue={form.formValues["garagem"] + "+"}
                        onChangeValue={form.handleChangeForm}
                        KeyName="garagem"
                        defaultValue={"0+"}
                    />  

                    <input
                        sx={{ backgroundColor: "primary" }} 
                        type="submit" 
                        value="Buscar" 
                        className={Form.SubmitButton}
                    />
                </form>
            </div>
        </div>
    );
}

export default memo(SearchForm);
