import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/ContextProvider';

const PrivetRoute = ({children}) => {
    const {user,Loading} = useContext(AuthContext)
    const location = useLocation()

    if(Loading){
        return  Loading ;
    }
    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivetRoute;