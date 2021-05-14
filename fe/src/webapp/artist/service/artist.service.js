import axios from 'axios';

const findAll = () => {
    alert('여긴? ::::::::A');
    axios.get(`/artist.json`);
};

export default { findAll };
