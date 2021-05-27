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
//+ mypage.artistId, mypage
const mypage = (mypage) => {
    return axios.put(`http://localhost:8080/artists/mypage`, {
        artistId: mypage.artistId,
        username: mypage.username,
        password: mypage.password,
        name: mypage.name,
        phoneNumber: mypage.phoneNumber,
        email: mypage.email,
        address: mypage.email,
        department: mypage.department,
    });
};

export default { list, signin, mypage };
