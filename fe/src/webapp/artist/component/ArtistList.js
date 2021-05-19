import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistList } from '../reducer/artist.reducer';
import axios from 'axios';
import '../style/ArtistList.css';
import ArtistsDelete from 'webapp/artist/component/ArtistDelete';

const ArtistList = () => {
    const history = useHistory();

    const [artistsList, setArtistsList] = useState([]);

    const fetchList = () => {
        axios
            .get(`http://localhost:8080/artists/findAll`)
            .then((res) => {
                console.log(res);
                setArtistsList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deleteButton = () => {
        // 리스트의 삭제가 1번만지워짐.
        alert(`삭제됩니다`);
        axios
            .delete(`http://localhost:8080/artists/delete/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
                alert('삭제되나?');
                history.push('/');
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        console.log('렌더링중..');

        fetchList();
        // alert(fetchList());
    }, []);

    const homeButton = () => {
        window.location = '/';
    };

    // const dispatch = useDispatch();
    useEffect(() => {
        // alert('1. useEffect > dispatch');
        // dispatch(getArtistList());
    }, []);

    // const artists = useSelector((state) => {
    //     console.log('state::::::::::::::: ' + JSON.stringify(state));
    //     alert(`state/artosts ::::: ${state.artists}`);
    //     return state.artists;
    // });
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>유저넘버 </th>
                        <th>아이디 </th>
                        <th>비밀번호 </th>
                        <th>이름 </th>
                        <th>E-mail </th>
                        <th>주소 </th>
                        <th>학교 </th>
                        <th>학과 </th>
                    </tr>
                </thead>
                <tbody>
                    {artistsList.map((artist, id) => {
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
                                    <td>
                                        <Link to={`/artist/artist-read/${artist.artistId}`} className="linkto-uss">
                                            <button
                                                className="buttonSelectList1"
                                                onClick={() => {
                                                    localStorage.setItem('select', `${artist.artistId}`);
                                                }}
                                            >
                                                자세히보기
                                            </button>
                                        </Link>
                                        <button className="buttonSelectList2" onClick={deleteButton}>
                                            삭제하기
                                        </button>
                                        <button className="buttonSelectList3" onClick={homeButton}>
                                            홈으로
                                        </button>
                                    </td>
                                </tr>
                            </>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};
export default ArtistList;
