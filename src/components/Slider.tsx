/** @jsx jsx */
import { jsx } from 'theme-ui'

import React, { useState } from 'react';
import { ISlider } from "interfaces/index";
import Slider from "rc-slider";

import Form from "src/styles/Form.module.css";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const SliderComponent : React.FC<ISlider> = ({ Label, defaultValue, extraStyles, updateSimbling }) => {

    const [value, setValue] = useState<Array<number>>([0, 200000000]);
    
    const handleChange = (e : Array<number>) => setValue(e);
    const formatValue = (e : number) => e.toLocaleString("pt");


    const handleChangeInputMin = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        if(e.target.value < value[1]){
            const values = [e.target.value, value[1]];
            setValue(values);
        }            
    }

    const handleChangeInputMax = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        if(e.target.value > value[0]){
            const values = [value[0], e.target.value];
            setValue(values);
        } 
        
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
                    <input type="number" value={value[0]}  onChange={handleChangeInputMin} />
                </div>

                <div>
                    <input type="number" value={value[1]} onChange={handleChangeInputMax} />
                </div>
            </div>
        </div>   
    );
}

export default SliderComponent;