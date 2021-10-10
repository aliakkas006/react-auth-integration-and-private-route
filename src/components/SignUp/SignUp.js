import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="text-center">
            <h2>Please Sign up</h2>
            <form>
                <input type="email" placeholder="Enter your email" />
                <br /><br />
                <input type="password" name="password" placeholder="Password" />
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/signin">Already registerd?</Link>
        </div>
    );
};

export default SignUp;