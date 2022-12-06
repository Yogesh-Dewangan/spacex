import { useState } from "react";

export default function Pagination({datasPerPage, totalDatas, paginate}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalDatas/datasPerPage); i++) {
        pageNumbers.push(i);
    }

    return <ul className="pagination float-end">
        {pageNumbers.map(number => {
            return <li key={number} className='page-item'>
                <a onClick={() => paginate(number)} className="page-link">{number}</a>
            </li>
        })}
    </ul>

}