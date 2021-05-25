import React from 'react';
import '../../style/PageList.css';
import { fetchPage } from '../../reducer/artistSlice.reducer';
import { useDispatch, useSelector } from 'react-redux';

const PageList = () => {
    const { pageList, page, start, end, prev, next } = useSelector((state) => state.todo.pageResult);
    const dispatch = useDispatch();
    console.log('PageList....');
    console.log(pageList);

    const movePage = (page) => {
        dispatch(fetchPage(page));
    };

    const list = pageList.map((i) => (
        <button key={i} onCLick={() => movePage(i)}>
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
