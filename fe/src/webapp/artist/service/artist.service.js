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

const signup = (param) => {
    alert('안올껄?');
    console.log('sevice param : ', param);
    return axios
        .post(`${SERVER}/artists/signup`, param, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {
            return response.data;
        });
};

const mypage = (artist) => {
    return axios
        .put(`${SERVER}/artists/mypage`, artist, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {
            return response.data;
        });
};

const deleteSelect = (deleteSelect) => {
    return axios.put(`${SERVER}/artists/delete`, deleteSelect);
};

const totalSearchBar = (totalSearchBar) => {
    return axios.put(`${SERVER}/page/totalSearchBar`, totalSearchBar);
};

export default { list, signin, signup, mypage, totalSearchBar, deleteSelect };
