import React, { useEffect, useState, useReducer } from "react";
import { IinitValues, ISubmitForm } from "interfaces/index";

const formatKeys = ["banheiros", "garagem", "quartos"];

export const useForm = (initValues : IinitValues, submitForm : ISubmitForm) => {

    const [buyValues, setBuyValues] = useState(initValues);


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

        console.log(buyValues);

    }

    return { 
        buyValues, 
        handleChangeBuy 
    }
}