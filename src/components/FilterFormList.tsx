/** @jsx jsx */
import { jsx, Flex, Checkbox } from 'theme-ui';

import { useState, useEffect, memo } from "react";

import Section from 'src/styles/Section.module.css';
import Form from 'src/styles/Form.module.css';
import { useForm } from "src/hooks/useForm";
import { useFetch } from "src/hooks/useFetch";
import { useRouter } from "next/router";

import { IFilterFormList, IPropertyXML, ICarga } from "interfaces";
import DropDownComponent from "src/components/DropDownComponent";
import SliderComponent from "src/components/Slider";

const FilterFormList : React.FC<IFilterFormList> = ({ propertyList, callbackList }) => {
    const { parsedXml, state } = useFetch();

    const router = useRouter();


    useEffect(() => {
        if(state === "done" && parsedXml) extractCity(parsedXml.Carga.Imoveis.Imovel);
    }, [state]);

    const [cities, setCities] = useState<Array<string>>([]);
    const [streets, setStreets] = useState<Array<string>>([]);

    const { 
        formValues, 
        handleChangeForm, 
        handleSliderChange, 
        errMessage, 
        handleForm 
    } = useForm({
        buy: true,
        cidade: "",
        bairro: "",
        valores: [0, 200000000],
        quartos: 0,
        banheiros: 0,
        garagem: 0
    }, () => submitForm());

    const extractCity = (Imoveis : Array<IPropertyXML>) => {
        const mappedCities = Imoveis.map(imovel => {
            if(imovel && imovel.Cidade)
                return imovel.Cidade._text;
    
            return;
        });
    
        const filteredCities = mappedCities.filter(filterUnique);
        setCities(filteredCities);
        
    }
  
    const extractStreets = (selectedCity : string) => {
        handleChangeForm("Todos", "bairro");

        const mappedStreets : Array<string> = parsedXml.Carga.Imoveis.Imovel.map((imovel : IPropertyXML) => {
          if(imovel.Cidade._text === selectedCity && imovel.Bairro)
            return imovel.Bairro._text;
  
          return;
        });
  
        const filteredStreets = mappedStreets.filter(filterUnique);
        setStreets(filteredStreets);    
    }
  
    const filterUnique = (value : any, index : number, self : any) => self.indexOf(value) === index && value !== undefined;

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
                        selectedValue={formValues["banheiros"] + "+"}                                
                        onChangeValue={handleChangeForm}
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
                    selectedValue={formValues["garagem"] + "+"}                                
                    onChangeValue={handleChangeForm}
                    KeyName="garagem"
                    defaultValue={"1+"}
                />

                <div className={Section.checkContainer}>
                    <Flex>
                        <Checkbox 
                            id="ar"
                        />
                        <label htmlFor="ar">Ar condicionado</label>
                    </Flex>

                    <Flex>
                        <Checkbox 
                            id="piscina"
                        />
                        <label htmlFor="piscina">Piscina</label>
                    </Flex>

                    <Flex>
                        <Checkbox 
                            id="seguranca"
                        />
                        <label htmlFor="seguranca">Segurança</label>
                    </Flex>
                    
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