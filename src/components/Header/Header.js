import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, signedOut } = useFirebase();
    return (
        <div className="text-center">
            <h2>This is header</h2>
            <Link className="text-decoration-none ms-5" to="/home">Home</Link>
            <Link className="text-decoration-none ms-5" to="/signup">Sign up</Link>
            <Link className="text-decoration-none mx-5" to="/signin">Sign in</Link>
            <span> {user.displayName} </span>
            {
                user.email && <button onClick={signedOut}>Sign out</button>
            }
        </div>
    );
};

export default Header;