import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getArtistList from '../reducer/artist.reducer';

const ArtistList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        alert('1. useEffect > dispatch');
        // dispatch(getArtistList());
    }, []);

    const artists = useSelector((state) => {
        return state.artists;
    });
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>유저 넘버</th>
                        <th>아이디</th>
                        <th>비밀번호</th>
                        <th>이름</th>
                        <th>E-mail</th>
                        <th>주소</th>
                        <th>소속</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {artists.map((artist, id) => {
                        return (
                            <tr key={id}>
                                <td>{artist.artistId}</td>
                                <td>{artist.username}</td>
                                <td>{artist.password}</td>
                                <td>{artist.name}</td>
                                <td>{artist.email}</td>
                                <td>{artist.address}</td>
                                <td>{artist.affiliation}</td>
                                <td>
                                    <Link to={`/artist/artist-read/${artist.artistId}`} className="linkto-uss">
                                        <button
                                            onClick={() => {
                                                localStorage.setItem('select, `${artist.artistId');
                                            }}
                                        >
                                            자세히보기
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })} */}
                </tbody>
            </table>
        </>
    );
};
export default ArtistList;
