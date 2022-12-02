import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../components/context/authprovider/AuthProvider';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (!(user.email === 'sakib@khan.com')) {
        return <Navigate to="/*" state={{ from: location }} replace></Navigate>
    }

    return children;

};

export default AdminRoute;