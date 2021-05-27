import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLocalArtist, artistCurrent } from '../reducer/artist.reducer';
import { mypagePage } from 'webapp/artist/reducer/artist.reducer';
import Signin from '../component/Signin';

const MyPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    // const currentArtist = useSelector((state) => state.artists.artistsState);
    useEffect(() => {
        dispatch(getLocalArtist());
    }, []);

    // const artistObj = useSelector(artistCurrent);
    console.log('-------------------------------------');
    console.log('mypage current.................');

    console.log('-------------------------------------');

    const artistsState = useSelector((state) => state.artists.artistsState);
    console.log('state.artists.artistsState ::::::: ' + artistsState);
    console.log('JSON.stringify(artistsState) ::::::: ' + JSON.stringify(artistsState));

    const [mypage, setMypage] = useState({
        artistId: artistsState.artistId,
        username: artistsState.usename,
        password: '',
        phoneNumber: '',
        email: '',
        address: '',
        school: '',
        department: '',
    });
    console.log('=========================');
    console.log('mypage.artistId = ::::::: ' + mypage.artistId);
    console.log(artistsState.artistId);
    console.log(artistsState.username);

    console.log(mypage.password);
    console.log(mypage.phoneNumber);
    console.log(mypage.email);
    console.log(mypage.address);
    console.log(mypage.school);
    console.log(mypage.department);
    console.log('=========================');
    const goMypage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        alert('dispatch 작동?');
        dispatch(mypagePage(mypage));
        // history.push('/');
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
                    <input type="password" placeholder="password" name="password" value={mypage.password || ''} onChange={handleChange} />

                    <label htmlFor="name">
                        <b>이름</b>
                    </label>
                    <td>{artistsState.name}</td>

                    <label htmlFor="phoneNumber">
                        <b>핸드폰번호</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="phoneNumber" name="phoneNumber" value={mypage.phoneNumber || ''} />

                    <label htmlFor="email">
                        <b>E-mail</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter Email" name="email" value={mypage.email || ''} />

                    <label htmlFor="address">
                        <b>주소</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter Addres" name="address" value={mypage.address || ''} />

                    <label htmlFor="school">
                        <b>학교</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter School" name="school" value={mypage.school || ''} />

                    <label htmlFor="department">
                        <b>학과</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter Department" name="department" value={mypage.department || ''} />

                    <div className="clearfix">
                        <button type="button" className="cancelbtn">
                            <Link to="/">홈으로</Link>
                        </button>
                        <button type="submit" className="updatebtn" onClick={(e) => goMypage(e)}>
                            정보 수정
                        </button>
                        {/* <button type="button" className="deletebtn" onClick={deleteButton}>
                            회원 탈퇴
                        </button> */}
                    </div>
                </div>
            </form>
        </>
    );
};
export default MyPage;
