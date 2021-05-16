import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style/ArtistUpdate.css';

const ArtistUpdate = () => {
    const [details, setDetails] = useState({});
    const { username, password, name, email, address, affiliation } = details;

    const fetchOne = () => {
        alert('정보를 가져옵니다');
        alert(`${localStorage.getItem('select')}`);

        axios
            .get(`http://localhost:8080/artists/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
                setDetails({
                    username: res.data.username,
                    password: res.data.password,
                    name: res.data.name,
                    email: res.data.email,
                    address: res.data.address,
                    affiliaton: res.data.affiliation,
                });
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchOne();
    }, []);

    const handleSubmit = useCallback(
        (e) => {
            alert('정보를 보냅니다');
            alert(`${localStorage.getItem('select')}`);

            e.preventDefault();
            console.log('업데이트 진행중');
            axios
                .put(`http://localhost:8080/artists/${localStorage.getITem('se;ect')}`, {
                    username,
                    password,
                    name,
                    email,
                    address,
                    affiliation,
                })
                .then((res) => {
                    console.log(res);
                    window.location = '/';
                })
                .cathch((err) => console.log(err));
        },
        [username, password, name, email, address, affiliation]
    );

    const handleChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setDetails({
                ...details,
                [name]: value,
            });
        },
        [details]
    );

    const artistUpdateList = () => {
        window.location = '/';
    };

    return (
        <>
            <h1>수정 페이지</h1>
            <form onSubmit={handleSubmit} method="post" className="updateListAll">
                <label htmlFor="username">
                    <b>아이디</b>
                </label>
                <input type="text" placeholder="Enter ID" name="username" id="username" onChange={handleChange} required />

                <label htmlFor="password">
                    <b>비밀번호</b>
                </label>
                <input type="text" placeholder="Enter Password" name="password" id="password" onChange={handleChange} required />

                <label htmlFor="name">
                    <b>이름</b>
                </label>
                <input type="text" placeholder="Enter Name" name="name" id="Name" onChange={handleChange} required />

                <label htmlFor="email">
                    <b>E-Mail</b>
                </label>
                <input type="text" placeholder="Enter Email" name="email" id="email" onChange={handleChange} required />

                <label htmlFor="address">
                    <b>주소</b>
                </label>
                <input type="text" placeholder="Enter Address" name="address" id="address" required onChange={handleChange} />

                <label htmlFor="affiliation">
                    <b>소속</b>
                </label>
                <input type="text" placeholder="Enter Affiliation" name="affiliation" id="affiliation" required onChange={handleChange} />

                <button type="submit" className="ArtistUpdateButton">
                    수정하기
                </button>
                <button className="ArtistUpdateButton2" onClick={artistUpdateList}>
                    목록으로
                </button>
            </form>
        </>
    );
};
export default ArtistUpdate;
