import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyPage = ({ history }) => {
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
        name: '',
        phoneNumber: '',
        email: '',
        address: '',
        school: '',
        department: '',
    });

    const { username, password, name, phoneNumber, email, address, school, department } = inputs;

    const handleChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setInputs({
                ...inputs,
                [name]: value,
            });
        },
        [inputs]
    );

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            console.log('작동중...');

            axios
                .put(`http://localhost:8080/artists/mypage/${localStorage.getItem('select')}`, {
                    username,
                    password,
                    name,
                    phoneNumber,
                    email,
                    address,
                    school,
                    department,
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => console.log(err));
        },
        [username, password, name, phoneNumber, email, address, school, department]
    );

    const deleteButton = () => {
        alert(`탈퇴됩니다`);
        // console.log('artistsList :::::::: ' + artistsList);
        // JSON.stringify('artistsList :::' + artistsList);
        console.log('deleteButton :::::::: ' + deleteButton);
        console.log(`${localStorage.getItem('selectDel')}`);
        axios
            .delete(`http://localhost:8080/artists/delete/${localStorage.getItem('selectDel')}`)
            .then((res) => {
                console.log(res);
                alert('삭제되나?');
                history.push('/');
            })
            .catch((err) => console.log(err));
    };
    return (
        <>
            <form onSubmit={handleSubmit} method="post">
                <div className="container">
                    <h1>마이 페이지</h1>
                    <hr />

                    <label htmlFor="username">
                        <b>아이디</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Username" name="username" value={username} required />

                    <label htmlFor="password">
                        <b>비밀번호</b>
                    </label>
                    <input type="password" onChange={handleChange} placeholder="Password" name="password" value={password} required />

                    <label htmlFor="userEmail">
                        <b>Email</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="UserEmail" name="userEmail" value={userEmail} required />

                    <label htmlFor="userAddress">
                        <b>주소</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="UserAddress" name="userAddress" value={userAddress} required />

                    <label htmlFor="userPhoneNumber">
                        <b>핸드폰 번호</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="UserPhoneNumber" name="userPhoneNumber" value={userPhoneNumber} required />

                    <div className="clearfix">
                        <button type="button" className="cancelbtn">
                            <Link to="/">홈으로</Link>
                        </button>
                        <button type="submit" className="updatebtn">
                            <Link to={`/UserUpdate/${username}`}>정보 수정</Link>
                        </button>
                        <button type="button" className="deletebtn" onClick={deleteButton}>
                            회원 탈퇴
                        </button>
                    </div>
                </div>
            </form>
            );
        </>
    );
};
export default MyPage;
