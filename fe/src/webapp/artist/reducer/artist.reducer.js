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

const getArtistSignupPage = async (signup) => {
    console.log('getArtistSignupPage :: ' + signup);
    const response = await ArtistService.signup(signup);
    return response.data;
};

const getArtistMypagePage = async (mypage) => {
    console.log('getArtistMypagePage :: ' + mypage);
    const response = await ArtistService.mypage(mypage);
    return response.data;
};

const getArtistDeleteSelect = async (deleteSelect) => {
    console.log('getArtistDeleteSelect :: ' + deleteSelect);
    const response = await ArtistService.deleteSelect(deleteSelect);
    return response.data;
};

const getTotalSearchBar = async (totalSearchBar) => {
    console.log('getTotalSearchBar :: ' + totalSearchBar);
    const response = await ArtistService.totalSearchBar(totalSearchBar);
    return response.data;
};

export const fetchPage = createAsyncThunk('artists/list', getArtistServerPage);
export const signinPage = createAsyncThunk('artists/signin', getArtistSigninPage);
export const signupPage = createAsyncThunk('artists/signup', getArtistSignupPage);
export const mypagePage = createAsyncThunk('artists/mypage', getArtistMypagePage);
export const deleteSelect = createAsyncThunk('artists/mypage', getArtistDeleteSelect);
export const totalSearchBar = createAsyncThunk('page/totalSearchBar', getTotalSearchBar);

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
            // console.log('artist :::: ' + JSON.stringify(artist));
            // console.log('state.artistsState :::: ' + JSON.stringify(state.artistsState));
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
            state.artistsState = payload;
            console.log('reducer payload ::::::::: ' + payload);
        },
        [signupPage.fulfilled]: (state, { meta, payload }) => {
            state.artistsState = payload;
            console.log('reducer payload ::::::::: ' + payload);
        },
        [deleteSelect.fulfilled]: (state, { meta, payload }) => {
            state.artistsState = payload;
            console.log('reducer payload ::::::::: ' + payload);
        },
    },
});
const { action, reducer } = artistSlice;
// export const artistCurrent = (state) => state.artistsState; // 현재 artist state
export const { getLocalArtist } = artistSlice.actions;
export default artistSlice.reducer;
