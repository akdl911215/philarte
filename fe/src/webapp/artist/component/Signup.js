import React, { useCallback, useState } from 'react';
import '../style/ArtistSignup.css';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Signup = () => {
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
        name: '',
        phoneNumber: '',
        address: '',
        affiliation: '',
    });

    const { username, password, name, phoneNumber, address, affiliation } = inputs;

    const handleChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setInputs({
                ...inputs,
                [name]: e.target.value,
            });
        },
        [inputs]
    );

    const dispatch = useDispatch();

    const handleSubmit = useCallback((e) => {
        alert(`회원가입에 성공하셨습니다.`);

        e.preventDefault();
        console.log(`회원가입 작동`);
        dispatch(inputs);

        axios
            .post(`http://localhost:8080/artists/sinup`, {
                username,
                password,
                name,
                phoneNumber,
                address,
                affiliation,
            })
            .then((res) => {
                console.log(res);
                window.location = '/';
            })
            .catch((err) => console.log(err));
    }, []);

    const cancelButton = (e) => {
        e.preventDefault();
        window.location = 'http://localhost:3000/artist/artist-signin';
    };

    return (
        <>
            <form action="/action_page.php" className="ArtistSignupHead">
                <div className="container">
                    <h1>회원가입(Sign Up)</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label htmlFor="username">
                        <b>아이디</b>
                    </label>
                    <input type="text" placeholder="Enter Username" name="username" required />

                    <label htmlFor="psw">
                        <b>비밀번호</b>
                    </label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <label htmlFor="psw-repeat">
                        <b>비밀번호 확인</b>
                    </label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

                    <label htmlFor="name">
                        <b>이름</b>
                    </label>
                    <input type="text" placeholder="Enter Name" name="name" required />

                    <label htmlFor="email">
                        <b>E-Mail</b>
                    </label>
                    <input type="text" placeholder="Enter Email" name="email" required />

                    <label htmlFor="phoneNumber">
                        <b>핸드폰 번호</b>
                    </label>
                    <input type="text" placeholder="Enter PhoneNumber" name="phoneNumber" required />

                    <label htmlFor="affiliation">
                        <b>소속</b>
                    </label>
                    <input type="text" placeholder="Enter Affiliation" name="affiliation" required />

                    <p>
                        By creating an account you agree to our{'PHILO-ARTE'}
                        <a href="#" className="ArtistSignupTermsPrivacy">
                            Terms & Privacy
                        </a>
                    </p>

                    <div class="clearfix">
                        <button type="button" className="cancelbtn" onClick={cancelButton}>
                            Cancel
                        </button>
                        <button type="submit" className="signupbtn" onClick={handleSubmit}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};
export default Signup;
