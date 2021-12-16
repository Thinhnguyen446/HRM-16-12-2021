import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Login from '../components/main/Login';
import { USER_LOCAL } from '../constants';
import { selectUser, setUser } from '../features/userSlice';
import { getLocalUser } from '../service/local-storage.service'

export default function Auth({children}) {
    const user = useSelector(selectUser);
    const localUser = getLocalUser(USER_LOCAL);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (localUser)
            dispatch(setUser(JSON.parse(localUser)));
            navigate("/config");
    }, []);
    
    return <> {user ? children : <Login />}</>;
}
