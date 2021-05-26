import React from 'react';
import ArtistPage from '../component/pageComponent/ArtistPage';
import ArtistPageList2 from 'webapp/artist/component/pageComponent/ArtistPageList2';
import '../style/PageList.css';
import ArtistPageSearch from '../component/pageComponent/ArtistPageSearch';

const ArtistPageContainer = () => {
    // alert('시작1');
    return (
        <>
            <div>
                <h1>Artist Page List</h1>

                <ArtistPageList2 />
                <ArtistPage />
                <ArtistPageSearch />
            </div>
        </>
    );
};
export default ArtistPageContainer;
