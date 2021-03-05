/** @jsx jsx */
import { jsx } from 'theme-ui'

import React, { useState } from 'react';
import { ISlider } from "interfaces/index";
import Slider from "rc-slider";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";

import Form from "src/styles/Form.module.css";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const defaultMaskOptions = {
    prefix: '',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2, // how many digits allowed after the decimal
    integerLimit: 9, // limit length of integer numbers
    allowNegative: false,
    allowLeadingZeroes: false
}

const CurrencyInput = ({ maskOptions, ...inputProps }) => {
    const currencyMask = createNumberMask({
        ...defaultMaskOptions,
        ...maskOptions,
    })

    return <MaskedInput mask={currencyMask} {...inputProps} />
}


const SliderComponent : React.FC<ISlider> = ({ Label, defaultValue, extraStyles, updateSimbling }) => {

    const [value, setValue] = useState<Array<number>>([0, 200000000]);
    
    const handleChange = (e : Array<number>) => setValue(e);
    const formatValue = (e : number) => e.toLocaleString("pt");


    const handleChangeInputMin = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        const convertedValue = parseInt(e.currentTarget.value.split('.').join(""));
        if(convertedValue < value[1]){
            const values = [convertedValue, value[1]];
            setValue(values);
        }            
    }

    const handleChangeInputMax = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        const convertedValue = parseInt(e.currentTarget.value.split('.').join(""));

        if(convertedValue > value[0]){
            const values = [value[0], convertedValue];
            setValue(values);
        } 
        
    }

    var mask = function (rawValue) {
        console.log(rawValue)

        const numberMask = createNumberMask({
            decimalLimit: 2,
            decimalSymbol: ",",
            prefix: '',
            thousandsSeparatorSymbol: ".",
            allowDecimal: true,
            allowLeadingZeroes: true
        });

        return numberMask;
    }

    return (
        <div className={Form.sliderContainer}>
            <label>
                {Label}
            </label>
            <Range 
                min={0}
                max={200000000}
                defaultValue={[0, 200000000]}
                onChange={handleChange}
                value={value}
                autoFocus
                tipFormatter={formatValue}
            />

            <div className={Form.SliderInputContainer}>
                <div>
                    <CurrencyInput placeholder="R$0,00" type="text" value={value[0]} onChange={handleChangeInputMin} />
                </div>

                <div>
                    <CurrencyInput placeholder="R$0,00" type="text" value={value[1]} onChange={handleChangeInputMax} />
                </div>
            </div>
        </div>   
    );
}

export default SliderComponent;