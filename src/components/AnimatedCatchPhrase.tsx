/** @jsx jsx */
import { Flex, jsx } from 'theme-ui'

import React from 'react';
import { IAnimatedCatchPhrase } from "interfaces/index";
import Animation from "src/styles/Animation.module.css";
import Section from "src/styles/Section.module.css";

const AnimatedCatchPhrase : React.FC<IAnimatedCatchPhrase> = () => {

    return (
        <div className={Section.catchPhrase}>
            <Flex className={Animation.section}>
                <div className={Animation.CPFirst}>
                    <h1>E</h1>
                    <h1>N</h1>
                    <h1>C</h1>
                    <h1>O</h1>
                    <h1>N</h1>
                    <h1>T</h1>
                    <h1>R</h1>
                    <h1>E</h1>
                </div>

                <div className={Animation.CPSecound}>
                    <h1>S</h1>
                    <h1>U</h1>
                    <h1>A</h1>
                </div>
            </Flex>

            <div className={Animation.FirstAnimatedWhiteContainer}>
                <div className={Animation.FirstAnimatedContainer}>
                    <div className={Animation.SCPFirst}>
                        <div>P</div>
                        <div>R</div>
                        <div>O</div>
                        <div>P</div>
                        <div>R</div>
                        <div>I</div>
                        <div>E</div>
                        <div>D</div>
                        <div>A</div>
                        <div>D</div>
                        <div>E</div>
                    </div>

                    <div className={Animation.SCPSecound}>
                        <div>D</div>
                        <div>O</div>
                        <div>S</div>
                    </div>

                    <div className={Animation.SCPThird}>
                        <div>S</div>
                        <div>O</div>
                        <div>N</div>
                        <div>H</div>
                        <div>O</div>
                        <div>S</div>
                    </div>
                </div>
            </div>

            <div className={Animation.SecoundAnimatedWhiteContainer}>
                <div className={Animation.SecoundAnimatedContainer}>
                    <div className={Animation.TCPFirst}>
                        <div>E</div>
                        <div>M</div>                        
                    </div>

                    <div className={Animation.TCPSecound}>
                        <div>1</div>
                    </div>

                    <div className={Animation.TCPThird}>
                        <div>C</div>
                        <div>L</div> 
                        <div>I</div>                       
                        <div>Q</div>                        
                        <div>U</div>                        
                        <div>E</div>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default AnimatedCatchPhrase;
