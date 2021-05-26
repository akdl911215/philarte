import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPage } from 'webapp/artist/reducer/artist.reducer';
import '../../style/ArtistPageSearch.css';
import Select from 'react-select';

const ArtistPageSearch = () => {
    const dispatch = useDispatch();
    const goSearch = () => {
        const selectedSearch = document.querySelector('#artists-select').nodeValue;
        console.log('selectedSearch :::::::: ' + selectedSearch);
        dispatch(fetchPage(selectedSearch));
    };

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

    // https://thrillfighter.tistory.com/572
    // https://ichi.pro/ko/react-selectleul-sayonghamyeon-seontaeg-ganeunghan-menyuleul-swibge-mandeul-su-issseubnida-102933182537945
    return (
        <>
            <form onSubmit={() => goSearch}>
                <div className="categoty">조건을 고르세요</div>
                <Select options={options} defaultValue={options[0]} defaultMenuIsOpen />
                <div className="SearchBar">
                    <div style={{ high: '30px' }}></div>
                    <table className="table">
                        <tr>
                            <td>
                                <input type="search" placeholder="검색" className="input" size="25" name="keyword" />
                            </td>
                        </tr>
                    </table>
                    <button>검색</button>
                </div>
            </form>
        </>
    );
};
export default ArtistPageSearch;
