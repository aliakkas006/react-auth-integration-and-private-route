import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useHooks';

const Header = () => {
    const { user, signedOut } = useAuth();

    return (
        <div className="text-center">
            <h2>This is header</h2>
            <Link className="text-decoration-none ms-3" to="/home">Home</Link>
            <Link className="text-decoration-none ms-3" to="/shipping">Shipping</Link>
            <Link className="text-decoration-none ms-3" to="/placeorder">Place Order</Link>
            <Link className="text-decoration-none ms-3" to="/signup">Sign up</Link>
            <Link className="text-decoration-none mx-3" to="/signin">Sign in</Link>
            <span> {user.displayName} </span>
            {
                user.email && <button onClick={signedOut}>Sign out</button>
            }
        </div>
    );
};

export default Header;