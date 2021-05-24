import React, { useState, useEffect } from 'react';
import '../../style/PageList.css';

const PageList = ({ pageList = [], prev, next, page, start, end, movePage }) => {
    const list = pageList.map((i) => (
        <button key={i} onClick={() => movePage(i)} className="PageListBtn">
            {i}
        </button>
    ));

    return (
        <div>
            {prev ? (
                <button className="PageListBtn" onClick={() => movePage(start - 1)}>
                    prev
                </button>
            ) : (
                <></>
            )}
            {list}
            {next ? (
                <button className="PageListBtn" onClick={() => movePage(end + 1)}>
                    next
                </button>
            ) : (
                <></>
            )}
        </div>
    );
};
export default PageList;
