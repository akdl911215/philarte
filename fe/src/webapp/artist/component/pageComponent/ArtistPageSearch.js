import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPage } from 'webapp/artist/reducer/artist.reducer';

const ArtistPageSearch = () => {
    const dispatch = useDispatch();
    const goSearch = () => {
        dispatch(fetchPage(''));
    };
    return (
        <>
            <form onSubmit={goSearch}>
                <div className="row">
                    <div className="ArtistPageList">
                        <table className="table">
                            <tr>
                                <td>
                                    <input type="search" placeholder="궁금한 검색 키워드 입력하세요" className="input" size="25" name="keyword" />
                                    <button>검색</button>
                                    <div className="ArtistListSearch"></div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </form>
        </>
    );
};
export default ArtistPageSearch;
