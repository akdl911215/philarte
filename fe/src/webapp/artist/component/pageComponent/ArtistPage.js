import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPage } from 'webapp/artist/reducer/artist.reducer';
import '../../style/ArtistPage.css';

const ArtistPage = () => {
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
export default ArtistPage;
