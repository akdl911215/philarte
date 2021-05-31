import React from 'react';
import ArtistPage from '../component/pageComponent/ArtistPageReset';
import ArtistPageList2 from 'webapp/artist/component/pageComponent/ArtistPageList2';
import '../style/PageList.css';

const ArtistPageContainer = () => {
    // alert('시작1');
    return (
        <>
            <div>
                <h1>Artist Page List</h1>

                <ArtistPageList2 />
                <ArtistPage />
            </div>
        </>
    );
};
export default ArtistPageContainer;
