import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getLocalArtist, logoutSelect } from '../reducer/artist.reducer';

const Logout = () => {
    const history = useHistory();

    const logoutButton = (e) => {
        e.preventDefault();
        e.stopPropagation();
        localStorage.clear(e);
        history.push('/');
    };

    return (
        <>
            <button
                className="buttonSelectList2"
                onClick={(e) => {
                    logoutButton(e);
                }}
            >
                로그아웃
            </button>
        </>
    );
};
export default Logout;
