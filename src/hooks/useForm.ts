import React, { useState } from "react";
import { IinitValues } from "interfaces/index";

const formatKeys = ["banheiros", "garagem", "quartos"];

export const useForm = (initValues : IinitValues, submitForm : () => void) => {

    const [buyValues, setBuyValues] = useState(initValues);
    const [errMessage, setErrMessage] = useState("");

    const handleChangeBuy = (value: string, KeyName : string) => {

        if(formatKeys.includes(KeyName)) {
            const formatKeyValue = parseInt(value.split("+").join(""));

            setBuyValues({
                ...buyValues,
                [KeyName]: formatKeyValue
            });

            return;
        }

        setBuyValues({
            ...buyValues,
            [KeyName]: value
        });
    }

    const handleSliderChange = (values: Array<number>) => {
        setBuyValues({
            ...buyValues,
            ["valores"] : values
        });
    }

    const handleForm = (e : React.FormEvent) => {
        e.preventDefault();

        if(buyValues["valores"][0] > buyValues["valores"][1]) {
            setErrMessage("Valor min. não pode ser maior que o valor max.");
            return;
        }            
        
        if(buyValues["valores"][1] > 200000000) {
            setErrMessage("Valor max não pode exceder R$ 200.000.000.");
            return;
        }

        setErrMessage(""); 
        submitForm();
    }

    return { 
        buyValues, 
        handleChangeBuy,
        handleForm,
        handleSliderChange,
        errMessage
    }
}