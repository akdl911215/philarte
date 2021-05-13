import React, { useEffect } from 'react';
import '../style/ArtistSignin.css';
const Signin = () => {
    const login = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="headerLoginFrom">
                <h2>Login Form</h2>
            </div>

            <form action="/action_page.php" method="post">
                <div className="imgcontainer">
                    <img src="https://i.pinimg.com/originals/32/99/86/329986c043a5829916d2eb0c3b7fed8c.png" alt="Avatar" className="avatar" />
                </div>
                <div className="container">
                    <label htmlFor="uname">
                        <b>ID</b>
                    </label>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                    <label htmlFor="psw">
                        <b>Password</b>
                    </label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                </div>
                <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                    <button type="button" className="cancelbtn">
                        Cancel
                    </button>
                    <span className="psw">
                        Forgot <a href="#">password?</a>
                    </span>
                </div>
            </form>
        </>
    );
};
export default Signin;
