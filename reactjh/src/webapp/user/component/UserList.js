// import './src/uss/component/userList.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersList } from '../reducer/user.reducer';

const UserList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        alert(`1. useEffect `);
        dispatch(getUsersList());
    }, []);

    const users = useSelector((state) => {
        // alert(`UserList = JSON.stringify(state) = ${JSON.stringify(state)}`);

        console.log('state: ' + JSON.stringify(state));
        return state.users;
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
                        <th>E-메일</th>
                        <th>롤</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, id) => {
                        return (
                            <tr key={id}>
                                <td>{user.userNo}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.roles}</td>
                                <td>
                                    <Link to={`/FeedBoardRead/${user.feedNo}`} className="linkto-uss">
                                        <button
                                            onClick={() => {
                                                localStorage.setItem('select', `${user.feedNo}`);
                                            }}
                                        >
                                            자세히 보기
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            );
        </>
    );
};

export default UserList;
