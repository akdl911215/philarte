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

const mypage = (mypage) => {
    return axios.put(`http://localhost:8080/artists/mypage` + mypage.artistId, mypage);
};

export default { list, signin, mypage };
