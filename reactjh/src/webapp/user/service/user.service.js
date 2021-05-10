import axios from 'axios';
import { useEffect } from 'react';
import SignUp from 'webapp/user/component/SignUp';
import Login from 'webapp/user/component/Login';
import UserEdit from 'webapp/user/component/UserEdit';

const findAll = () => axios.get('http://localhost:8080/users/findAll');
const signup = () => {
    axios({
        url: URL + `http://localhost:8080/users/signup`,
        method: 'post',
        headers: { 'Content-Type': 'application/json', Authorization: 'JWT fefege..' },
        data: SignUp,
    });
};
const signin = () => {
    axios({
        url: URL + '/webapp/users/signin',
        method: 'post',
        header: { 'Content-Type': 'application/json', Authorization: 'JWT fefege..' },
        data: Login,
    });
};
const userEdit = () => {
    axios({
        url: URL + UserEdit.userNum,
        method: 'put',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('token') },
        data: UserEdit,
    });
};
const userDelete = () => {
    axios({
        url: URL + UserEdit.userNum,
        method: 'delete',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('token') },
    });
};

export default { findAll, signup, signin, userEdit, userDelete };
