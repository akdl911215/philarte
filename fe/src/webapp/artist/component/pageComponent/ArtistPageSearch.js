import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPage, getLocalArtist, totalSearchBar } from 'webapp/artist/reducer/artist.reducer';
import '../../style/ArtistPageSearch.css';
import Select from 'react-select';
import SearchOverlay from 'webapp/common/Header/SearchOverlay';

const ArtistPageSearch = () => {
    const dispatch = useDispatch();
    const pageState = useSelector((state) => state.artists.pageResult);
    useEffect(() => {
        dispatch(getLocalArtist());
    }, []);

    const [input, setInput] = useState({
        page: '',
        size: '',
        type: '',
        keyword: '',
    });

    const goSearch = () => {
        console.log('pageState :::: ', pageState);
        const obj = { page: input.page, size: input.size, type: input.type, keyword: input.keyword };
        console.log('SEND BEFORE', obj);
        // dispatch(mypagePage(obj));

        dispatch(fetchPage(totalSearchBar));
    };

    const handleChange = useCallback(
        (e) => {
            e.preventDefault();
            const { name, value } = e.target;
            setInput({
                ...input,
                [name]: value,
            });
        },
        [input]
    );

    const options = useMemo(
        () => [
            { value: 'unesd', label: 'ID+name+email+school+department' },
            // { value: 'u', label: 'ID' },
            // { value: 'n', label: 'name' },
            // { value: 'e', label: 'email' },
            // { value: 's', label: 'school' },
            // { value: 'd', label: 'department' },
        ],
        []
    );

    return (
        <>
            <div className="categoty">조건을 고르세요</div>
            <Select options={options} defaultValue={options[0]} defaultMenuIsOpen />
            <div className="SearchBar">
                <div style={{ high: '30px' }}></div>
                <table className="table">
                    <tr>
                        <td>
                            <input type="search" placeholder="검색" className="input" size="25" name="keyword" value={input.searchBar} onChange={handleChange} />
                        </td>
                    </tr>
                </table>
                <button onClick={(e) => goSearch(e)}>검색</button>
            </div>
        </>
    );
};
export default ArtistPageSearch;
