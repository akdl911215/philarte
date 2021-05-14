import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ArtistService from '../service/artist.service';

export const getArtistList = createAsyncThunk('artist/findAll', async () => {
    const response = await ArtistService.findAll();
    return response.data;
});

const isRejectedAction = (action) => action.type.endsWith('rejected');
const artistSlice = createSlice({
    name: 'artist',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getArtistList.fulfilled, (state, { payload }) => {
                alert(`리덕스 내부 회원 목록 조회 성공 ${payload}`);
                return [...payload];
            })
            .addMatcher(isRejectedAction, () => {})
            .addDefaultCase((state, action) => {});
    },
});
const { action, reducer } = artistSlice;
// export const { addCase } = actions;
export default reducer;
