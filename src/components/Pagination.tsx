/** @jsx jsx */
import { jsx } from 'theme-ui'

import React, { FC, useState, useEffect } from 'react';
import { IPagination } from "interfaces/index";
import property from "src/styles/Property.module.css";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


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

    const [totalPages] = useState(Math.ceil(total / pageLimit));
    const [currentPage, setCurrentPage] = useState(1);
    const [nPageNeighbours] = useState(
      typeof pageNeighbours === 'number'
      ? Math.max(0, Math.min(pageNeighbours, 2))
      : 0);


    const fetchPageNumbers = () => {
        const cTotalPages = totalPages;
        const cCurrentPage = currentPage;
        const cPageNeightbours = nPageNeighbours;

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

    useEffect(() => {
      gotoPage(1);      
    }, []);

    const gotoPage = (page : number) => {
      const currentPage = Math.max(0, Math.min(page, totalPages));
      const paginationData = {
        currentPage,
        totalPages: totalPages,
        pageLimit: pageLimit,
        totalRecords: total
      };
  
      setCurrentPage(currentPage);

      onPageChanged(paginationData);
    }

    const handleClick = (e : React.MouseEvent, page : number) => {
      e.preventDefault();
      gotoPage(page);
    }


    const handleMoveLeft = (e : React.MouseEvent) => {
      e.preventDefault();
      gotoPage(currentPage - (pageNeighbours * 2) - 1);
    }
  
    const handleMoveRight = (e : React.MouseEvent) => {
      e.preventDefault();
      gotoPage(currentPage + (pageNeighbours * 2) + 1);
    }

    if(totalPages === 1 || !total) return null;

    const pages = fetchPageNumbers();

    return (        
      <nav arial-label="Properties Pagination">
          <ul className={property.pagination}>
              {pages.map((page, index) => {

                    if(page === LEFT_PAGE) return (
                      <li key={index} className={property.pageItem}>
                          <a href="#" onClick={handleMoveLeft}>
                            <MdKeyboardArrowLeft />
                          </a>
                      </li>
                    );

                    if(page === RIGHT_PAGE) return (
                      <li key={index} className={property.pageItem}>
                          <a href="#" onClick={handleMoveRight}>
                            <MdKeyboardArrowRight />
                          </a>
                      </li>
                    );

                    return (
                      <li key={index} className={currentPage === page ? 'page-item-actived' : ''}>
                          <a href="#" onClick={(e) => handleClick(e, page)}>{page}</a>
                      </li>
                    );
              })}
          </ul>
      </nav>                   
    );
}

export default ListProperties;