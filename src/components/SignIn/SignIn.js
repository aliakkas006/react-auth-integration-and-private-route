import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const SignIn = () => {
    const { signInUsingGoogle, signInUsingGithub } = useFirebase();
    return (
        <div className="text-center">
            <h2>Please Sign in</h2>
            <button onClick={signInUsingGoogle}>Google Sign in</button>
            <br /><br />
            <button onClick={signInUsingGithub}>Github Sign in</button>
            <br /><br />
            <Link to="/signin">New user?</Link>
        </div>
    );
};

export default SignIn;