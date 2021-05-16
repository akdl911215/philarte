import axios from 'axios';

const findAll = () => {
    alert('finaAll ::::::::');
    axios.get(`http://localhost:8080/users/findAll`);
};

const signup = () => {
    alert(`signup :::::::::`);
    axios.post(`http://localhost:8080/artists/signup`);
};

export default { findAll };
