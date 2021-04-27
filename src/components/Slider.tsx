/** @jsx jsx */
import { jsx } from 'theme-ui'

import React, { memo } from 'react';
import { ISlider } from "interfaces/index";
import Slider from "rc-slider";

import Form from "src/styles/Form.module.css";
import CurrencyInput from "src/components/CurrencyInput";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const SliderComponent : React.FC<ISlider> = ({ Label, values, onChangeValue, errorMessage }) => {
    
    const handleChange = (e : Array<number>) => onChangeValue(e);
    const formatValue = (e : number) => e.toLocaleString("pt");


    const handleChangeInputMin = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        if(e.currentTarget.value) {
            const convertedValue = parseInt(e.currentTarget.value.split('.').join(""));
            const updatedValues = [convertedValue, values[1]];
            onChangeValue(updatedValues);
        } else {
            const updatedValues = [0, values[1]];
            onChangeValue(updatedValues);
        }    
                    
    }

    const handleChangeInputMax = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        if(e.currentTarget.value) {
            const convertedValue = parseInt(e.currentTarget.value.split('.').join(""));
            const updatedValues = [values[0], convertedValue];
            onChangeValue(updatedValues); 
        } else {
            const updatedValues = [values[0], 0];
            onChangeValue(updatedValues); 
        }
    }

    return (
        <div className={Form.sliderContainer}>
            <label sx={{ color: 'title' }}>
                {Label}
            </label>
            <Range 
                min={0}
                max={200000000}
                defaultValue={[0, 200000000]}
                onChange={handleChange}
                value={values}
                autoFocus
                tipFormatter={formatValue}
            />

            <div className={Form.SliderInputContainer}>
                <div>
                    <CurrencyInput placeholder="R$0,00" type="text" value={values[0]} onChange={handleChangeInputMin} />
                    <span sx={{ color: 'title' }}>Min.</span>
                </div>

                <div>
                    <CurrencyInput placeholder="R$0,00" type="text" value={values[1]} onChange={handleChangeInputMax} />
                    <span sx={{ color: 'title' }}>Max.</span>
                </div>
            </div>
            {errorMessage && (
                <div className={Form.ErrorMessage}>
                    <span>{errorMessage}</span>
                </div>
            )}

        </div>   
    );
}

export default memo(SliderComponent);