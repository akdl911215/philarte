import React, { useCallback, useState } from 'react';
import '../style/ArtistSignup.css';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Signup = ({ history }) => {
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
        name: '',
        phoneNumber: '',
        email: '',
        address: '',
        school: '',
        department: '',
    });

    const { username, password, name, phoneNumber, email, address, school, department } = inputs;

    const handleChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setInputs({
                ...inputs,
                [name]: value,
            });
        },
        [inputs]
    );

    // const dispatch = useDispatch();

    const handleSubmit = useCallback(
        (e) => {
            alert(`회원가입에 성공하셨습니다.`);

            e.preventDefault();
            console.log(`회원가입 작동`);
            // dispatch(inputs);
            alert('ID : ' + username);
            console.log('username ::::::::' + username);
            console.log('email:::::::::::::::' + email);
            console.log('department :::::::::::::: ' + department);

            axios
                .post(`http://localhost:8080/artists/signup`, {
                    username: username,
                    password: password,
                    name: name,
                    phoneNumber: phoneNumber,
                    email: email,
                    address: address,
                    school: school,
                    department: department,
                })
                .then((res) => {
                    console.log(res);
                    setInputs(res.data);
                    history.push('/');
                    // window.location = '/';
                })
                .catch((err) => console.log(err));
        },
        [username, password, name, phoneNumber, email, address, school, department]
    );

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
                    <input type="text" placeholder="Enter Username" name="username" value={username} onChange={handleChange} />

                    <label htmlFor="password">
                        <b>비밀번호</b>
                    </label>
                    <input type="password" placeholder="Enter Password" name="password" value={password} onChange={handleChange} />

                    <label htmlFor="name">
                        <b>이름</b>
                    </label>
                    <input type="text" placeholder="Enter Name" name="name" value={name} onChange={handleChange} />

                    <label htmlFor="email">
                        <b>E-Mail</b>
                    </label>
                    <input type="text" placeholder="Enter Email" name="email" value={email} onChange={handleChange} />

                    <label htmlFor="phoneNumber">
                        <b>핸드폰 번호</b>
                    </label>
                    <input type="text" placeholder="Enter PhoneNumber" name="phoneNumber" value={phoneNumber} onChange={handleChange} />

                    <label htmlFor="school">
                        <b>학교</b>
                    </label>
                    <input type="text" placeholder="Enter School" name="school" value={school} onChange={handleChange} />

                    <label htmlFor="department">
                        <b>소속</b>
                    </label>
                    <input type="text" placeholder="Enter Department" name="department" value={department} onChange={handleChange} />

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
