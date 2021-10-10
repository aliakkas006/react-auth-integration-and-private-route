import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className="text-center">
            <h2>Please Sign in</h2>
            <button>Google Sign in</button>
            <br /><br />
            <Link to="/signin">New user?</Link>
        </div>
    );
};

export default SignIn;