import axios from 'axios';

const list = (page) => {
    return axios.get('http://localhost:8080/page/list?page=' + page);
};

const signin = (signin) => {
    return axios.post(`http://localhost:8080/artists/signin`, {
        username: signin.username,
        password: signin.password,
    });
};

const signup = (signup) => {
    return axios.post(`http://localhost:8080/artists/signup`, signup);
};

const mypage = (artist) => {
    return axios.put('http://localhost:8080/artists/mypage', artist);
};

const deleteSelect = (deleteSelect) => {
    return axios.put('http://localhost:8080/artists/delete', deleteSelect);
};

const totalSearchBar = (totalSearchBar) => {
    return axios.put('http://localhost:8080/page/totalSearchBar', totalSearchBar);
};

export default { list, signin, signup, mypage, totalSearchBar };
