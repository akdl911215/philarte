import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { artistCurrent, getLocalArtist } from '../reducer/artist.reducer';
import { mypagePage } from 'webapp/artist/reducer/artist.reducer';
import Signin from '../component/Signin';
import ArtistsDelete from './ArtistDelete';

const MyPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const artistObj = useSelector(mypagePage);
    const artistsState = useSelector((state) => state.artists.artistsState);

    const [mypage, setMypage] = useState({
        artistId: artistsState.artistId,
        username: artistsState.usename,
        password: '',
        name: '',
        phoneNumber: '',
        email: '',
        address: '',
        school: '',
        department: '',
    });

    useEffect(() => {
        dispatch(getLocalArtist());
    }, []);

    const goMypage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const obj = { artistId: artistsState.artistId, username: artistsState.usename, password: mypage.password, name: artistsState.name, phoneNumber: mypage.phoneNumber, email: mypage.email, address: mypage.address, school: mypage.school, department: mypage.department };
        console.log('SEND BEFORE', obj);
        dispatch(mypagePage(obj));
        history.push('/');
    };

    const handleChange = useCallback(
        (e) => {
            e.preventDefault();
            const { name, value } = e.target;
            setMypage({
                ...mypage,
                [name]: value,
            });
        },
        [mypage]
    );
    return (
        <>
            <form>
                <div className="container">
                    <h1>마이 페이지</h1>
                    <hr />

                    <form>
                        <label htmlFor="artistId">
                            <b>아이디번호</b>
                        </label>
                        <td>{artistsState.artistId} </td>

                        <label htmlFor="username">
                            <b>아이디</b>
                        </label>
                        <td>{artistsState.username} </td>

                        <label htmlFor="password">
                            <b>비밀번호</b>
                        </label>
                        <input type="password" placeholder="password" name="password" value={mypage.password} onChange={(e) => handleChange(e)} />

                        <label htmlFor="name">
                            <b>이름</b>
                        </label>
                        <td>{artistsState.name}</td>

                        <label htmlFor="phoneNumber">
                            <b>핸드폰번호</b>
                        </label>
                        <input type="text" placeholder="phoneNumber" name="phoneNumber" value={mypage.phoneNumber} onChange={(e) => handleChange(e)} />

                        <label htmlFor="email">
                            <b>E-mail</b>
                        </label>
                        <input type="text" placeholder="Enter Email" name="email" value={mypage.email} onChange={(e) => handleChange(e)} />

                        <label htmlFor="address">
                            <b>주소</b>
                        </label>
                        <input type="text" placeholder="Enter Addres" name="address" value={mypage.address} onChange={(e) => handleChange(e)} />

                        <label htmlFor="school">
                            <b>학교</b>
                        </label>
                        <input type="text" placeholder="Enter School" name="school" value={mypage.school} onChange={(e) => handleChange(e)} />

                        <label htmlFor="department">
                            <b>학과</b>
                        </label>
                        <input type="text" placeholder="Enter Department" name="department" value={mypage.department} onChange={(e) => handleChange(e)} />

                        <button
                            type="submit"
                            className="updatebtn"
                            onClick={(e) => {
                                goMypage(e);
                            }}
                        >
                            정보 수정
                        </button>
                    </form>

                    <div className="clearfix">
                        <button type="button" className="cancelbtn">
                            <Link to="/">홈으로</Link>
                        </button>
                    </div>
                    <br />
                    <br />
                    <ArtistsDelete />
                </div>
            </form>
        </>
    );
};
export default MyPage;
