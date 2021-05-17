import React, { useEffect } from 'react';
import '../style/ArtistSignin.css';
import { Link } from 'react-router-dom';

const Signin = () => {
    const login = () => {
        axios
            .get(`http://localhost:8080/atists/signin`)
            .then(() => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    const login = (e) => {
        e.preventDefault();
    };

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
                    <label htmlFor="username">
                        <b>ID</b>
                    </label>
                    <input type="text" placeholder="Enter Username" name="username" required />
                    <label htmlFor="psw">
                        <b>비밀번호</b>
                    </label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <button type="submit">Login</button>
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
