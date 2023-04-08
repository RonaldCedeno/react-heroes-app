import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

export const NavBar = () => {

    const {user:{name}, dispatch} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login', {replace: true});
        dispatch({
            type: types.logout,
            payload: {logged: false}
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand m-lg-2" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse w-75">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>{name}</span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
