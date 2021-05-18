import React, { useEffect, useState } from 'react';
import '../style/ArtistSignin.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
    const [login, setLogin] = useState({
        username: '',
        password: '',
    });

    const handleClick = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:8080/artists/signin`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin({
            ...login,
            [name]: value,
        });
    };

    // const login = () => {
    //     axios
    //         .get(`http://localhost:8080/atists/signin`)
    //         .then(() => {})
    //         .catch((err) => console.log(err));
    // };

    const cancelButton = (e) => {
        e.preventDefault();
        window.location = '/';
    };

    return (
        <>
            <div className="headerLoginFrom">
                <h2>로그인(Login)</h2>
            </div>

            <form action="/action_page.php" method="post">
                <div className="imgcontainer">
                    <img src="https://i.pinimg.com/originals/32/99/86/329986c043a5829916d2eb0c3b7fed8c.png" alt="Avatar" className="avatar" />
                </div>
                <div className="container">
                    <label htmlFor="username" name="username" value="login.username" onClick="handleChange">
                        <b>ID</b>
                    </label>
                    <input type="text" placeholder="Enter Username" required />

                    <label htmlFor="password" name="password" value="login.password" onClick="handleChange">
                        <b>비밀번호</b>
                    </label>
                    <input type="password" placeholder="Enter Password" equired />

                    <button type="submit" onClick={handleClick}>
                        Login
                    </button>
                </div>

                <div className="container ArtistSigninCancel">
                    <button type="button" className="cancelbtn" onClick={cancelButton}>
                        Cancel
                    </button>
                    <span className="psw">
                        Forgot <a href="#">password?</a>
                    </span>
                </div>

                <div className="container SupporterSignup">
                    <label>
                        <Link to="/artist/artist-signup">
                            <button className="buttonSelect1">서포터 회원가입</button>
                        </Link>
                    </label>
                    <label>
                        <Link to="/artist/artist-signup">
                            <button className="buttonSelect2">아티스트 회원가입</button>
                        </Link>
                    </label>
                </div>
            </form>
        </>
    );
};
export default Signin;
