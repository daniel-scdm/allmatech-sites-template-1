/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC } from 'react';
import { IListProperties } from "interfaces/index";
import ListStyle from "src/styles/List.module.css";

import ListCard from "src/components/ListCard";
import Pagination from "src/components/Pagination";

const ListProperties : FC<IListProperties> = ({ List, pageNumber, total, totalPages }) => {

    return (
        <div className={ListStyle.container}>
            {List.map(p => (
                <ListCard 
                    image="https://dunk.brickthemes.com/wp-content/uploads/2020/01/interior-design-house-and-modern-white-kitchen-Z53XFYH-min-470x340.jpg"
                    bathrooms={p.bathrooms}
                    bedrooms={p.bedrooms}
                    garages={p.garages}
                    price={p.price}
                    text={p.text}
                    title={p.title}
                    OfferMessage={"Oferta"}
                />
            ))}
            <Pagination
                pageLimit={15}
                pageNeighbours={2}
                total={200}
                onPageChanged={() => {}} 
            />
        </div>            
    );
}

export default ListProperties;