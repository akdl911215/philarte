import React, { useState, useEffect } from 'react';
import { useDispatch, useS, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { deleteSelect, getLocalArtist } from 'webapp/artist/reducer/artist.reducer';
const ArtistsDelete = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const artistsState = useSelector((state) => state.artists.artistsState);

    console.log('===================');
    console.log(artistsState.artistId);
    console.log('===================');
    useEffect(() => {
        dispatch(getLocalArtist());
    }, []);

    const deleteButton = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const obj = { artistId: artistsState.artistId };
        console.log('SEND BEFORE', obj);
        dispatch(deleteSelect(obj));
        history.push('/');
    };

    return (
        <>
            <button
                className="buttonSelectList2"
                onClick={(e) => {
                    deleteButton(e);
                }}
            >
                탈퇴하기
            </button>
        </>
    );
};
export default ArtistsDelete;
