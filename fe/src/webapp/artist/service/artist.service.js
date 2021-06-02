import axios from 'axios';

const list = (page) => {
    console.log('page :: ', page);
    const str = 'page=' + (!page.page ? 1 : page.page) + '&type=' + (page.type ? page.type : '') + '&keyword=' + (page.keyword ? page.keyword : '');
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

export default { list, signin, signup, mypage, totalSearchBar, deleteSelect };
