/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC, useState } from 'react';
import { IPagination } from "interfaces/index";
import ListStyle from "src/styles/List.module.css";

import ListCard from "src/components/ListCard";
import Pagination from "src/components/Pagination";


const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to, step = 1) => {
    let i  = from;
    const range = [];

    while(i <= to) {
        range.push(i);
        i += step;
    }

    return range;
}

const ListProperties : FC<IPagination> = ({ total, pageLimit, onPageChanged, pageNeighbours }) => {

    const [totalPages, setTotalPages] = useState(Math.ceil(total / pageLimit));
    const [currentPage, setCurrentPage] = useState(1);


    const fetchPageNumbers = () => {
        const cTotalPages = totalPages;
        const cCurrentPage = currentPage;
        const cPageNeightbours = pageNeighbours;

        /**
         * totalNumbers: the total page numbers to show on the control
         * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
         */

        const totalNumbers = (pageNeighbours * 2) + 3;
        const totalBlocks = totalNumbers + 2;

        if(totalPages > totalBlocks) {
            const startPage = Math.max(2, currentPage - pageNeighbours);
            const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
            let pages = range(startPage, endPage);

            /**
             * hasLeftSpill: has hidden pages to the left
             * hasRightSpill: has hidden pages to the right
             * spillOffset: number of hidden pages either to the left or to the right
             */

            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (totalPages - endPage) > 1;
            const spillOffset = totalNumbers - (pages.length + 1);

            switch (true) {
                // handle: (1) < {5 6} [7] {8 9} (10)
                case (hasLeftSpill && !hasRightSpill): {
                  const extraPages = range(startPage - spillOffset, startPage - 1);
                  pages = [LEFT_PAGE, ...extraPages, ...pages];
                  break;
                }
        
                // handle: (1) {2 3} [4] {5 6} > (10)
                case (!hasLeftSpill && hasRightSpill): {
                  const extraPages = range(endPage + 1, endPage + spillOffset);
                  pages = [...pages, ...extraPages, RIGHT_PAGE];
                  break;
                }
        
                // handle: (1) < {4 5} [6] {7 8} > (10)
                case (hasLeftSpill && hasRightSpill):
                default: {
                  pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                  break;
                }
              }
        
              return [1, ...pages, totalPages];
        }
        
        return range(1, totalPages);
    }

    return (
        <div className={ListStyle.container}>
            
        </div>            
    );
}

export default ListProperties;