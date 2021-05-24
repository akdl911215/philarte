import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import PageList from './PageList';
import '../../style/ArtistPageList2.css';
// import ArtistSearch from 'webapp/artist/component/pageComponent/ArtistSearch';

const ArtistPageList2 = ({ num }) => {
    const [page, setPage] = useState(num || 1);

    const [pageResult, setPageReulst] = useState({ dtoList: [] });

    const getTotalArtistList = () => {
        axios
            .get('http://localhost:8080/page/list/pages?page=' + page)
            .then((res) => {
                setPageReulst(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };

    const getTotalArtistSearchList = () => {
        axios
            .get('http://localhost:8080/page/list/pages?page=', {
                artistId: '',
                username: '',
                name: '',
                email: '',
                address: '',
                school: '',
                department: '',
            })
            .then((res) => {
                setPageReulst(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getTotalArtistList();
    }, [page]);

    const movePage = (page) => {
        setPage(page);
    };

    // const handleChange = (e) => {
    //     console.log(e.taget.value);
    // };

    // const list = pageResult.dtoList.map((Artist) => (
    //     <li key={Artist.artistNo}>
    //         {Artist.artistNo} -- {Artist.username} -- {Artist.name} -- {Artist.email} -- {Artist.phoneNumber} -- {Artist.address} -- {Artist.school} -- {Artist.department}
    //     </li>
    // ));

    const handleChange = useCallback((e) => {
        console.log('JSON.stringify(getTotalArtistSearchList()) ::::::: ' + JSON.stringify(getTotalArtistSearchList()));
        getTotalArtistSearchList();
    });

    const handleSearch = (e) => {
        pageResult.dtoList.artist({
            [e.target.name]: e.target.value,
        });
    };

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
                <PageList {...pageResult} movePage={movePage}></PageList>
                <br />
                <br />

                <form onSubmit={(e) => handleChange(e)}>
                    <div className="row">
                        <div className="ArtistPageList">
                            <table className="table">
                                <tr>
                                    <td>
                                        <input type="search" placeholder="궁금한 검색 키워드 입력하세요" className="input" size="25" name="search" />
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
