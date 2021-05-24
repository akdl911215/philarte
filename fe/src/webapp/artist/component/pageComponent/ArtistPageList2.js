import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageList from './PageList';

const ArtistPageList2 = ({ num }) => {
    const [page, setPage] = useState(num || 1);

    const [pageResult, setPageReulst] = useState({ dtoList: [] });

    const getTotalArtistList = () => {
        axios
            .get(`http://localhost:8080/page/list/pages?page=` + page)
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

    const handleChange = (e) => {
        console.log(e.taget.value);
    };

    // const list = pageResult.dtoList.map((Artist) => (
    //     <li key={Artist.artistNo}>
    //         {Artist.artistNo} -- {Artist.username} -- {Artist.name} -- {Artist.email} -- {Artist.phoneNumber} -- {Artist.address} -- {Artist.school} -- {Artist.department}
    //     </li>
    // ));

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
                <div className="row">
                    <div style={{ heigh: '30px' }}></div>
                    <table className="table">
                        <tr>
                            <td>
                                <input type="text" className="input" size="25" onChange={handleChange} />
                            </td>
                        </tr>
                    </table>
                </div>
                <PageList {...pageResult} movePage={movePage}></PageList>
            </div>
        </>
    );
};
export default ArtistPageList2;
