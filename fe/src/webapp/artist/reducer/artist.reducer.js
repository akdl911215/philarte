import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ArtistService } from 'webapp/artist/index';

const getArtistServerPage = async (page) => {
    console.log('getARtistServerPage :: ' + page);
    const response = await ArtistService.list(page);
    return response.data;
};

const getArtistSigninPage = async (signin) => {
    console.log('getArtistSigninPage :: ' + signin);
    const response = await ArtistService.signin(signin);
    return response.data;
};

const getArtistMypagePage = async (mypage) => {
    console.log('getArtistMypagePage :: ' + mypage);
    const response = await ArtistService.mypage(mypage);
    return response.data;
};

export const fetchPage = createAsyncThunk('artists/list', getArtistServerPage);
export const signinPage = createAsyncThunk('artists/signin', getArtistSigninPage);
export const mypagePage = createAsyncThunk('artists/mypage', getArtistMypagePage);

// const isRejectedAction = (action) => action.type.endsWith('rejected');
const artistSlice = createSlice({
    name: 'artists',
    initialState: {
        pageResult: {
            dtoList: [],
            page: 1,
            pageList: [],
            start: 1,
            end: 1,
            prev: false,
            next: false,
            username: 'as',
            name: 'as',
            email: 'as',
            address: 'as',
            school: 'as',
            department: 'as',
        },
        artistsState: {
            artistId: '',
            username: '',
            password: '',
            name: '',
            phoneNumber: '',
            email: '',
            address: '',
            school: '',
            department: '',
        },
    },
    reducers: {
        getLocalArtist: (state, action) => {
            console.log('getLocalAritist...................');

            if (state.artistsState.username !== '') {
                return;
            }

            const artist = JSON.parse(window.localStorage.getItem('artist'));
            state.artistsState = artist;
        },
    },
    extraReducers: {
        [fetchPage.fulfilled]: (state, { meta, payload }) => {
            console.log(payload);
            state.pageResult = payload;
        },
        [signinPage.fulfilled]: (state, { meta, payload }) => {
            console.log('payload ::::::::::: ' + payload);
            state.artistsState = payload;
            window.localStorage.setItem('artist', JSON.stringify(payload));
        },
        [mypagePage.fulfilled]: (state, { meta, payload }) => {
            console.log('reducer payload ::::::::: ' + payload);
            state.artistId = payload;
        },
    },
});
const { action, reducer } = artistSlice;
// export const artistCurrent = (state) => state.artists.artistsState; // 현재 artist state
export const { getLocalArtist } = artistSlice.actions;
export default artistSlice.reducer;
