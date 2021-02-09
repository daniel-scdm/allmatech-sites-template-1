/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC, useState } from 'react';
import { ISearchForm } from "interfaces/index";

import Form from "src/styles/Form.module.css";

const SearchForm : FC<ISearchForm> = () => {

    const [selectdTab, setSelectdTab] = useState(true);

    const handleTab = () => setSelectdTab(!selectdTab);


    return (
        <div className={Form.form}>
            <ul>
                <li 
                    sx={{
                        backgroundColor: selectdTab ?  "#00205c" : "#444"
                    }}
                    onClick={handleTab}
                >
                    Venda
                </li>
                <li
                    sx={{
                        backgroundColor: !selectdTab ?  "#00205c" : "#444"
                    }}
                    onClick={handleTab}
                >
                    Aluguel
                </li>
            </ul>
            <div className={Form.baseTab}></div>
            <div className={Form.container}>
                {selectdTab && (
                    <form>
                        <div>
                            <label>

                            </label>
                            <input placeholder="Local"/>
                        </div>                    
                    
                    </form>
                )}

                {!selectdTab && (
                    <form>
                        <div>
                            <label>

                            </label>
                            <input placeholder="Deslocal"/>
                        </div>                    
                    
                    </form>
                )}
                
            </div>
        </div>   
    );
}

export default SearchForm;
