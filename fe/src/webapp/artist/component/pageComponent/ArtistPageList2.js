import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import PageList from './PageList';
import '../../style/ArtistPageList2.css';
import { getArtistList } from 'webapp/artist/reducer/artist.reducer';
// import ArtistSearch from 'webapp/artist/component/pageComponent/ArtistSearch';

const ArtistPageList2 = () => {
    const dispatch = useDispatch();
    // artist.pageResult
    const pageResult = useSelector((state) => state.artist.pageResult);
    const page = pageResult.page;

    useEffect((e) => {
        dispatch(getArtistList(page));
    }, []);

    // const movePage = (page) => {
    //     setPage(page);
    // };

    return (
        <>
            <div>
                <h1>Page List Page</h1>
                <table>
                    <thead>
                        <th>유저넘버 </th>
                        <th>아이디 </th>
                        <th>비밀번호 </th>
                        <th>이름 </th>
                        <th>E-mail </th>
                        <th>주소 </th>
                        <th>학교 </th>
                        <th>학과 </th>
                    </thead>
                    <tbody>
                        {pageResult.dtoList.map((artist, id) => {
                            return (
                                <>
                                    {/* console.log('artist ::::::::::' + artist) */}
                                    <tr key={id}>
                                        <td>{artist.artistId}</td>
                                        <td>{artist.username}</td>
                                        <td>{artist.password}</td>
                                        <td>{artist.name}</td>
                                        <td>{artist.email}</td>
                                        <td>{artist.address}</td>
                                        <td>{artist.school}</td>
                                        <td>{artist.department}</td>
                                    </tr>
                                </>
                            );
                        })}
                    </tbody>
                </table>
                {/* <ul>{list}</ul> */}
                <PageList {...pageResult}>{pageResult.dtoList}</PageList>
                <br />
                <br />

                <form>
                    <div className="row">
                        <div className="ArtistPageList">
                            <table className="table">
                                <tr>
                                    <td>
                                        <input type="search" placeholder="궁금한 검색 키워드 입력하세요" className="input" size="25" name="keyword" />
                                        <button>검색</button>
                                        <div className="ArtistListSearch">
                                            {/* {pageResult.dtoList.map(artist) => (
                                                <ArtistSearch key={artist.artistId} id={artist.username} name={artist.name} email={artist.email}
                                                    address={artist.address} school={artist.school} department={artist.department}></ArtistSearch>
                                            )} */}
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};
export default ArtistPageList2;
