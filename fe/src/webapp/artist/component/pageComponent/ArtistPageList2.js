import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageList from './PageList';
import '../../style/ArtistPageList2.css';
import { fetchPage, getArtistServerPage, getLocalArtist } from '../../reducer/artist.reducer';
import { configureStore } from '@reduxjs/toolkit';
import ArtistPageSearch from 'webapp/artist/component/pageComponent/ArtistPageSearch';

const ArtistPageList2 = () => {
    const dispatch = useDispatch();

    const pageResult = useSelector((state) => state.artists.pageResult);
    const type = useSelector((state) => state.artists.pageResult.type);
    const keyword = useSelector((state) => state.artists.pageResult.keyword);

    const artists = useSelector((state) => {
        return state.artists.pageResult.dtoList; // 아티스트 목록을 store에서 조회 하여 사용 가능 하게함.
    });

    const msg = useSelector((state) => {
        return state.artists.msg;
    });

    console.log('==================================================');
    console.log(pageResult);
    console.log(type);
    console.log(keyword);
    console.log(artists);
    console.log(msg);
    console.log('==================================================');

    const page = pageResult.page;

    console.log('pageResult::::::::::', pageResult);

    useEffect(() => {
        console.log('artistPageList page :: ', page);
        // const param = { type: type }; //, keyword: keyword, page: page
        dispatch(fetchPage(page)); //페이지에 1페이지 뿌려주는 역할
    }, []);

    console.log('=========================');

    console.log(pageResult);

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
                    <PageList {...pageResult} type={type} keyword={keyword} />

                    <br />
                    <br />
                    <ArtistPageSearch {...pageResult} />
                </table>
            </div>
        </>
    );
};
export default ArtistPageList2;
