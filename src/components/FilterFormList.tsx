/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';

import { useState, useEffect, memo } from "react";

import Section from 'src/styles/Section.module.css';
import Form from 'src/styles/Form.module.css';

import { useForm } from "src/hooks/useForm";
import { useRouter } from "next/router";
import { useFilter } from "src/hooks/useFilter";

import { IFilterFormList, IPropertyXML } from "interfaces";
import DropDownComponent from "src/components/DropDownComponent";
import SliderComponent from "src/components/Slider";
import InputTextComponent from "src/components/InputTextComponent";
import CheckBoxComponent from "src/components/checkBoxComponent";

const FilterFormList : React.FC<IFilterFormList> = ({ propertyList, callbackList }) => {

    const { extractCity, filterUnique } = useFilter();
    const router = useRouter();

    const [cities, setCities] = useState<Array<string>>([]);
    const [streets, setStreets] = useState<Array<string>>([]);

    const { 
        formValues, 
        handleChangeForm, 
        handleCheck,
        handleSliderChange, 
        errMessage, 
        handleForm 
    } = useForm({
        buy: true,
        code: "",
        cidade: "",
        bairro: "",
        valores: [0, 200000000],
        quartos: 0,
        banheiros: 0,
        garagem: 0,
        arCondicionado: false,
        piscina: false,
        seguranca: false
    }, () => submitForm());


    useEffect(() => {
        if(propertyList) {
            const extractedCities = extractCity(propertyList);
            if(extractedCities) setCities(extractedCities);  
        }
    }, []);
  
    const extractStreets = (selectedCity : string) => {
        handleChangeForm("Todos", "bairro");

        if(propertyList) {
            const mappedStreets : Array<any> = propertyList.map((imovel : IPropertyXML) => {
                if(imovel.Cidade === selectedCity && imovel.Bairro)
                  return imovel.Bairro;

                return;
            });

            const filteredStreets = mappedStreets.filter(filterUnique);
            setStreets(filteredStreets); 
        }   
    }
  
    const submitForm = () => {

        const filterOptions = {
            ...formValues
        }

        if(router.pathname === "/property") {
            router.push({
                pathname: "/list",
                query: filterOptions
            });
        } else {
            callbackList(filterOptions);
        }
    }

    return (
        <div className={Section.filterForm}>
            <form className={Section.filterList} onSubmit={handleForm}>
                
                <InputTextComponent 
                    nameField="code"
                    Label="Código imovel"
                    placeholder="VILLA000000"
                    value={formValues['code'] ? formValues['code'] : ""}
                    onChange={handleChangeForm}
                />

                <DropDownComponent 
                    Label="Tipo"
                    ListOptions={[
                        "Venda",
                        "Aluguél"
                    ]}
                    selectedValue={formValues["buy"] ? "Venda" : "Aluguél"}
                    onChangeValue={handleChangeForm}
                    KeyName="buy"
                />

                <DropDownComponent 
                    Label="Cidade"
                    ListOptions={cities}
                    selectedValue={formValues["cidade"]}
                    updateSimbling={extractStreets}
                    onChangeValue={handleChangeForm}
                    KeyName="cidade"
                /> 

                <DropDownComponent 
                    Label="Bairro"
                    ListOptions={streets}
                    selectedValue={formValues["bairro"]}
                    onChangeValue={handleChangeForm}
                    KeyName="bairro"
                />

                <SliderComponent 
                    Label="Valor (R$)"   
                    values={formValues["valores"]}  
                    onChangeValue={handleSliderChange} 
                    errorMessage={errMessage}                      
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
                        selectedValue={formValues["quartos"] + "+"}                                
                        extraStyles={{
                            paddingRight: 25  
                        }}
                        onChangeValue={handleChangeForm}
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
                        selectedValue={formValues["banheiros"] + "+"}                                
                        onChangeValue={handleChangeForm}
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
                    selectedValue={formValues["garagem"] + "+"}                                
                    onChangeValue={handleChangeForm}
                    KeyName="garagem"
                    defaultValue={"0+"}
                />

                <div className={Section.checkContainer}>
                    
                    <CheckBoxComponent 
                        Label="arCondicionado"
                        nameField="Ar Condicionado"
                        value={formValues["arCondicionado"] ? formValues["arCondicionado"] : false}
                        onChange={handleCheck}
                    />

                    <CheckBoxComponent 
                        Label="piscina"
                        nameField="Piscina"
                        value={formValues["piscina"] ? formValues["piscina"] : false}
                        onChange={handleCheck}
                    />                    

                    <CheckBoxComponent 
                        Label="seguranca"
                        nameField="Segurança"
                        value={formValues["seguranca"] ? formValues["seguranca"] : false}
                        onChange={handleCheck}
                    />
                </div>

                <input 
                    type="submit" 
                    value="Buscar" 
                    className={Form.SubmitButton}
                />
            </form>
        </div>
    );
}

export default memo(FilterFormList);