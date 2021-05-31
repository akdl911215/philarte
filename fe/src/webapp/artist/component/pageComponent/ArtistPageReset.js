import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPage, getArtistServerPage, getLocalArtist } from 'webapp/artist/reducer/artist.reducer';
import '../../style/ArtistPage.css';

const ArtistPageReset = () => {
    // alert('시작2');
    const dispatch = useDispatch();
    const goReset = () => {
        dispatch(fetchPage(1));
    };
    return (
        <>
            <button className="ArtistPageBtn" onClick={() => goReset()}>
                Reset
            </button>
        </>
    );
};
export default ArtistPageReset;
