import React from 'react';
import '../style/ArtistSignup.css';

const Signup = () => {
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

                    <label>
                        <input type="checkbox" checked="checked" name="remember" className="ArtistSignupCheckbox" /> Remember me
                    </label>

                    <p>
                        By creating an account you agree to our{' '}
                        <a href="#" className="ArtistSignupTermsPrivacy">
                            Terms & Privacy
                        </a>
                        .
                    </p>

                    <div class="clearfix">
                        <button type="button" class="cancelbtn">
                            Cancel
                        </button>
                        <button type="submit" class="signupbtn">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};
export default Signup;
