import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import PageList from './PageList';
import '../../style/ArtistPageList2.css';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
// import ArtistSearch from 'webapp/artist/component/pageComponent/ArtistSearch';

const ArtistPageList2 = ({ num }) => {
    const history = useHistory();
    const params = new URLSearchParams(window.location.search);

    const [page, setPage] = useState(params.get('page') || 1);
    const [type, setType] = useState(params.get('type') || '');
    const [keyword, setKeyword] = useState(params.get('keyword') || '');

    const [pageResult, setPageReulst] = useState({ dtoList: [] });

    const historyPush = () => {
        let state = {};
        let title = '';
        let url = '';
        history.pushState(state, title, url);
        // pushstate 사용하기
        // state = 상태 값을 나타내는 것으로 브라우저에서 앞/뒤로 갈 때, 넘겨줄 데이터
        // title = 변경할 브라우저 제목(변경을 원하지 않으면 null)
        // url = 변결할 브루우저 URL
    };

    const getTotalArtistList = () => {
        console.log('--------------------');
        console.log(page);
        console.log(type);

        const str = 'page=' + page + '&type=' + type + '&keyword=' + keyword;

        console.log(str);
        console.log('----------------------------------------------------------');

        axios
            .get('http://localhost:8080/page/list?' + str)
            .then((res) => {
                console.log('page :::: ' + page);
                console.log('JSON.stringify(page) :::: ' + JSON.stringify(page));
                console.log('type :::: ' + type);
                console.log('JSON.stringify(type) :::: ' + JSON.stringify(type));
                console.log('keyword :::: ' + keyword);
                console.log('JSON.stringify(keyword) :::: ' + JSON.stringify(keyword));
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
                <PageList {...pageResult} movePage={movePage} onClick={historyPush}></PageList>
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
