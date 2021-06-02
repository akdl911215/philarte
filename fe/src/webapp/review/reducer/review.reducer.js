import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {} from 'react-router';
import { ReviewService } from 'webapp/review/index';

export const getReviewList = createAsyncThunk('reviews/list', async (pageResult) => {
    const response = await ReviewService.list(pageResult);
    return response.data;
});

export const getReviewRegister = createAsyncThunk('review/register', async (input) => {
    const response = await ReviewService.register(input);
    return response.data;
});

export const getReviewRead = createAsyncThunk('reviews/read', async (reviewId) => {
    const response = await ReviewService.read(reviewId);
    return response.data;
});

export const getReviewModify = createAsyncThunk('reviews/modify/reviewId', async (review) => {
    const response = await ReviewService.modify(review);
    return response.data;
});

export const getReviewDelete = createAsyncThunk('reviews/delete/reviewId', async (reviewId) => {
    const response = await ReviewService.deletes(reviewId);
    return response.data;
});

const isRejectAction = (action) => action.type.endsWith('rejected');

const reviewSlice = createSlice({
    name: 'reviews',
    initialState: {
        msg: '',
        pageResult: {
            dtoList: [],
            page: 1,
            pageList: [],
            start: 1,
            end: 1,
            prev: false,
            next: false,
        },
        type: '',
        keyword: '',
        params: {},
    },
    reducer: {
        changeSearch: (state, action) => {
            state.type = action.payload.type;
            state.keyword = action.payload.keyword;
        },
    },
    extraReducers: {
        [getReviewList.fulfilled]: (state, { meta, payload }) => {
            console.log(payload);
            state.pageResult = payload;
        },
        [getReviewRegister.fulfilled]: (state, { meta, payload }) => {
            const msg = '' + payload.result + '번 등록';
            console.log('msg : ', msg);
            return { ...state, msg };
        },
        [getReviewRead.fulfilled]: (state, { meta, payload }) => {
            console.log(payload);
            state.params = payload;
        },
        [getReviewModify.fulfilled]: (state, { meta, payload }) => {
            console.log(payload);
            state.reviewId = payload;
        },
        [getReviewDelete.fulfilled]: (state, { meta, payload }) => {
            console.log(payload);
            state.params = payload;
        },
    },
});

const { actons, reducer } = reviewSlice;
export const currentReview = (state) => state.reviews.params; // 현재 review state
export const { changeSearch } = reviewSlice.actions;
export default reducer;
