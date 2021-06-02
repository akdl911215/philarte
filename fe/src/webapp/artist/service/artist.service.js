import axios from 'axios';

const SERVER = 'http://localhost:8080';

const list = (page) => {
    console.log('page :: ', page);
    const str = 'page=' + (!page.page ? 1 : page.page) + '&type=' + (page.type ? page.type : '') + '&keyword=' + (page.keyword ? page.keyword : '');
    return axios.get(`${SERVER}/artists/list/pages?` + str);
};

const signin = (signin) => {
    return axios.post(`${SERVER}/artists/signin`, {
        username: signin.username,
        password: signin.password,
    });
};

const signup = (signup) => {
    return axios.post(`${SERVER}/artists/signup`, signup, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

const mypage = (artist) => {
    return axios.put(`${SERVER}/artists/mypage`, artist);
};

const deleteSelect = (deleteSelect) => {
    return axios.put(`${SERVER}/artists/delete`, deleteSelect);
};

const totalSearchBar = (totalSearchBar) => {
    return axios.put(`${SERVER}/page/totalSearchBar`, totalSearchBar);
};

export default { list, signin, signup, mypage, totalSearchBar, deleteSelect };
