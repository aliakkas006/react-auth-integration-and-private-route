import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="text-center">
            <h2>This is header</h2>
            <Link className="text-decoration-none ms-5" to="/home">Home</Link>
            <Link className="text-decoration-none ms-5" to="/signup">Sign up</Link>
            <Link className="text-decoration-none ms-5" to="/signin">Sign in</Link>
            <button>Sign out</button>
        </div>
    );
};

export default Header;