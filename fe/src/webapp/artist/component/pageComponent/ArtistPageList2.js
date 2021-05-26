import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import PageList from './PageList';
import '../../style/ArtistPageList2.css';
import { getArtistList } from 'webapp/artist/reducer/artist.reducer';
import { fetchPage } from '../../reducer/artist.reducer';

// import ArtistSearch from 'webapp/artist/component/pageComponent/ArtistSearch';

const ArtistPageList2 = () => {
    // alert('시작3');
    const dispatch = useDispatch();
    // artist.pageResult
    const pageResult = useSelector((state) => state.artists.pageResult);
    const page = pageResult.page;

    console.log('pageResult :::::::: ' + pageResult);
    console.log('pageResult :::::::: ' + JSON.stringify(pageResult));
    console.log('pageResult.page::::::::::' + pageResult.page);

    useEffect((e) => {
        dispatch(fetchPage(page));
    }, []);

    // const movePage = (page) => {
    //     dispatch(page);
    // };

    return (
        <>
            <div>
                <table className="table table-striped table-bordered">
                    <table>
                        <thead style={{ textAlign: 'center' }}>
                            <th>유저넘버 </th>
                            <th>아이디 </th>
                            <th>비밀번호 </th>
                            <th>이름 </th>
                            <th>E-mail </th>
                            <th>주소 </th>
                            <th>학교 </th>
                            <th>학과 </th>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
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
                    <PageList {...pageResult} />
                    <br />
                    <br />
                </table>
            </div>
        </>
    );
};
export default ArtistPageList2;
