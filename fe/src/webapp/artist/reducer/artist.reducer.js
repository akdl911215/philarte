import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ArtistService } from 'webapp/artist/index';

const getArtistServerPage = async (page) => {
    console.log('getARtistServerPage :: ' + page);
    const response = await ArtistService.list(page);
    // alert(`JSON.stringify(response) :::::::::: ${JSON.stringify(response)}`);
    return response.data;
};

export const fetchPage = createAsyncThunk('artists/list', getArtistServerPage);

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
    },
    reducers: {},
    extraReducers: {
        [fetchPage.fulfilled]: (state, { meta, payload }) => {
            console.log(payload);
            state.pageResult = payload;
        },
    },
});
const { action, reducer } = artistSlice;
// export const { addCase } = actions;
export default artistSlice.reducer;
