import axios from 'axios';

const findAll = () => axios.get(`http://localhost:8080/artists/findAll`);

export default { findAll };
