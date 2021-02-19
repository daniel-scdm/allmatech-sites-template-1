/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC } from 'react';
import { INewsCard } from "interfaces/index";
import Image from "next/image";

import { BiSearch } from "react-icons/bi";


import Section from "src/styles/Section.module.css";

const Search : FC = () => {

    return (
        <div className={Section.search}>
            <form>
                <input type="text" name="" id="" placeholder="Buscar"/>
                <button type="submit" value="">
                    <BiSearch />
                </button>
            </form>                       
        </div>    
    );
}

export default Search;