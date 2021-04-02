import React, { useState } from "react";
import { IinitValues } from "interfaces/index";

const formatKeys = ["banheiros", "garagem", "quartos"];

export const useForm = (initValues : IinitValues, submitForm : () => void) => {

    const [formValues, setFormValues] = useState(initValues);
    const [errMessage, setErrMessage] = useState("");

    const handleChangeForm = (value: string, KeyName : string) => {

        if(KeyName === "buy") {
            if(value === "Venda") {
                setFormValues({
                    ...formValues,
                    buy: true
                });
                return;
            } 
            
            if(value === "Aluguél") {
                setFormValues({
                    ...formValues,
                    buy: false
                });
                return;
            }
        }

        if(formatKeys.includes(KeyName)) {
            const formatKeyValue = parseInt(value.split("+").join(""));

            setFormValues({
                ...formValues,
                [KeyName]: formatKeyValue
            });

            return;
        }
        
        setFormValues({
            ...formValues,
            [KeyName]: value
        });
    }

    const handleSliderChange = (values: Array<number>) => {
        setFormValues({
            ...formValues,
            ["valores"] : values
        });
    }

    const handleCheck = (KeyName : string) => {
        console.log(formValues[KeyName], KeyName)
        if(typeof formValues[KeyName] === 'boolean') {
            setFormValues({
                ...formValues,
                [KeyName]: !formValues[KeyName]
            });
        }
        
        console.log(formValues)
    }

    const handleForm = (e : React.FormEvent) => {
        e.preventDefault();

        if(formValues["valores"][0] > formValues["valores"][1]) {
            setErrMessage("Valor min. não pode ser maior que o valor max.");
            return;
        }            
        
        if(formValues["valores"][1] > 200000000) {
            setErrMessage("Valor max não pode exceder R$ 200.000.000.");
            return;
        }

        setErrMessage(""); 
        submitForm();
    }

    return { 
        formValues, 
        handleChangeForm,
        handleForm,
        handleCheck,
        handleSliderChange,
        errMessage
    }
}