import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { AuthContext } from '../components/auth/AuthContext';

export const AppRouter = () => {

    const {user: {logged}} = useContext(AuthContext);

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route 
                        exact path='/login' 
                        element={
                            (!logged)
                            ? <LoginScreen/>
                            : <Navigate to={'/'}/>
                        }/>
                    <Route 
                        path='*' 
                        element={
                            (logged)
                            ? <DashboardRoutes />
                            : <Navigate to={'/login'}/>
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
