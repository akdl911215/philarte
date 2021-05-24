import React from 'react';
// import styled from 'style-components';
import '../../../artist/style/Pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div>
                <nav>
                    <div className="PaginationPageUl PaginationPageLiHober PaginationPageLiHober2">
                        {pageNumbers.map((number) => (
                            <div key={number} className="PaginationPageLi ">
                                <div onClick={() => paginate(number)} className="PaginationPageSpan">
                                    {number}
                                </div>
                            </div>
                        ))}
                    </div>
                </nav>
            </div>
        </>
    );
};
export default Pagination;
