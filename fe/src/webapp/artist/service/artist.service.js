import axios from 'axios';

// const list = (page) => {
//     return axios.get('http://localhost:8080/artists/list/pages?page=' + page);
// };

const list = (cri) => {
    const str = 'page=' + (!cri.page ? 1 : cri.page) + '&type=' + (cri.type ? cri.type : '') + '&keyword=' + (cri.keyword ? cri.keyword : '');

    // const str = 'page=' + (!cri.page ? 1 : cri.page);
    // console.log('str ::::::: ', str);
    console.log('pagpageListe :::::::::: ', cri);
    return axios.get('http://localhost:8080/artists/list/pages?' + str);
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
