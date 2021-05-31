import React, { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPage, getLocalArtist, totalSearchBar, changeSearch } from 'webapp/artist/reducer/artist.reducer';
import '../../style/ArtistPageSearch.css';
import Select from 'react-select';
import SearchOverlay from 'webapp/common/Header/SearchOverlay';
import { useHistory } from 'react-router';

const ArtistPageSearch = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const pageResult = useSelector((state) => state.artists.pageResult);
    console.log('pageResult');
    const page = pageResult.page;

    // const refType = useRef();
    // const refKeyword = useRef();
    console.log('----------------------------------');
    console.log(page);
    // console.log(refType);
    // console.log(refKeyword);
    console.log('----------------------------------');

    console.log('page ::::::: ', page);
    console.log('refType ::::::: ', page);
    console.log('page refKeyword:::::: ', page);
    // useEffect(() => {
    //     dispatch(getLocalArtist());
    // }, []);

    // const [input, setInput] = useState({
    //     // page: '',
    //     // size: '',
    //     type: '',
    //     keyword: '',
    // });

    const goSearch = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        // const typeStr = refType.current.value;
        // const keywordStr = refKeyword.current.value;
        // const pageNum = 1;

        // const param = { type: typeStr, keyword: keywordStr, page: pageNum };
        // console.log('param :::::::', param);

        // await dispatch(changeSearch(param));
    };

    const goHome = (e) => {
        e.preventDefault();
        e.stopPropagation();
        history.push('/');
    };

    // const handleChange = useCallback(
    //     (e) => {
    //         e.preventDefault();
    //         const { name, value } = e.target;
    //         setInput({
    //             ...input,
    //             [name]: value,
    //         });
    //     },
    //     [input]
    // );

    const options = useMemo(
        () => [
            { value: 'unesd', label: 'ID+name+email+school+department' },
            { value: 'u', label: 'ID' },
            { value: 'n', label: 'name' },
            { value: 'e', label: 'email' },
            { value: 's', label: 'school' },
            { value: 'd', label: 'department' },
        ],
        []
    );

    // defaultMenuIsOpen
    return (
        <>
            <div className="categoty">조건을 고르세요</div>
            {/* <Select options={options} defaultValue={options[0]} /> */}
            <div className="SearchBar">
                <div style={{ high: '30px' }}></div>
                <table className="table">
                    <input type="search" placeholder="검색" className="input" size="25" name="keyword" />
                </table>
                <button onClick={(e) => goSearch(e)}>Search</button>
                <button onClick={(e) => goHome(e)}>Clear</button>
            </div>
        </>
    );
};
export default ArtistPageSearch;
