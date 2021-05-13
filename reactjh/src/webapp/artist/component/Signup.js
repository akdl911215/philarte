import React from 'react';

const Signup = () => {
    return (
        <>
            <form action="/action_page.php" className="ArtistSignupHead">
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input type="text" placeholder="Enter Email" name="email" required />

                    <label htmlFor="psw">
                        <b>Password</b>
                    </label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <label htmlFor="psw-repeat">
                        <b>Repeat Password</b>
                    </label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

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
