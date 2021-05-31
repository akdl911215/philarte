import React, { useEffect } from 'react';
import '../../style/PageList.css';
import { fetchPage } from '../../reducer/artist.reducer';
import { useDispatch, useSelector } from 'react-redux';
import '../../style/ArtistPage.css';

const PageList = ({ pageList, page, start, end, prev, next }) => {
    // type = '', keyword = '', size = ''
    const pageResult = useSelector((state) => state.artists.pageResult);

    console.log('------------------------', pageResult);

    // const { pageList, page, start, end, prev, next } = useSelector((state) => state.artists.pageResult);
    const dispatch = useDispatch();
    // console.log('PageList....');
    // console.log(pageList);
    // console.log('page........... ::::: ' + page);
    // console.log('start :::::::: ' + start);
    // console.log('end ::::::::::: ' + end);
    // console.log('prev ::::::::: ' + prev);
    // console.log('next ::::::::::: ' + next);
    // console.log('type ::::::::::: ', type);
    // console.log('keyword ::::::::::: ', keyword);

    const movePage = (i) => {
        console.log('movPage i :::::: ', i);
        // const param = { type: type }; //keyword: keyword, page: page
        console.log('param :: ', i);
        dispatch(fetchPage(i));
    };

    console.log('pageList ::::::::: ' + JSON.stringify(pageList));

    const list = pageList.map((i) => (
        <button key={i} classsName="PageListBtn" onClick={() => movePage(i)}>
            {i}
        </button>
    ));

    console.log('pageList ::::::::: ' + pageList);

    console.log('movPage > list :::' + list);
    // console.log('movPage > JSON.stringify(list) :::' + JSON.stringify(list));
    // alert('movPage > list :::' + list);

    return (
        <>
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
        </>
    );
};
export default PageList;
