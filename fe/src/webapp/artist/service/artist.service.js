import axios from 'axios';

const list = (page) => {
    alert('list ::::::::');
    return axios.get('http://localhost:8080/page/listpages?page=' + page);
};

const signup = () => {
    alert(`signup :::::::::`);
    return axios.post(`http://localhost:8080/artists/signup`);
};

export default { list };
