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

    // const deleteButton = () => {
    //     alert(`탈퇴됩니다`);
    //     // console.log('artistsList :::::::: ' + artistsList);
    //     // JSON.stringify('artistsList :::' + artistsList);
    //     console.log('deleteButton :::::::: ' + deleteButton);
    //     console.log(`${localStorage.getItem('selectDel')}`);
    //     axios
    //         .delete(`http://localhost:8080/artists/delete/${localStorage.getItem('selectDel')}`)
    //         .then((res) => {
    //             console.log(res);
    //             alert('삭제되나?');
    //             history.push('/');
    //         })
    //         .catch((err) => console.log(err));
    // };
    return (
        <>
            <form onSubmit={handleSubmit} method="post">
                <div className="container">
                    <h1>마이 페이지</h1>
                    <hr />

                    <label htmlFor="username">
                        <b>아이디</b>
                    </label>
                    <td>{inputs.username}</td>

                    <label htmlFor="password">
                        <b>비밀번호</b>
                    </label>
                    <input type="password" onChange={handleChange} placeholder={password} name="password" value={password} required />

                    <label htmlFor="name">
                        <b>이름</b>
                    </label>
                    <td>{inputs.name}</td>

                    <label htmlFor="phoneNumber">
                        <b>핸드폰번호</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder={phoneNumber} name="phoneNumber" value={phoneNumber} required />

                    <label htmlFor="email">
                        <b>E-mail</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter Email" name="email" value={email} required />

                    <label htmlFor="address">
                        <b>주소</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter Addres" name="address" value={address} required />

                    <label htmlFor="school">
                        <b>학교</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter School" name="school" value={school} required />

                    <label htmlFor="department">
                        <b>학과</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter Department" name="department" value={department} required />

                    <div className="clearfix">
                        <button type="button" className="cancelbtn">
                            <Link to="/">홈으로</Link>
                        </button>
                        <button type="submit" className="updatebtn">
                            <Link to={`/UserUpdate/${username}`}>정보 수정</Link>
                        </button>
                        {/* <button type="button" className="deletebtn" onClick={deleteButton}>
                            회원 탈퇴
                        </button> */}
                    </div>
                </div>
            </form>
            );
        </>
    );
};
export default MyPage;
