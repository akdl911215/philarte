import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import artistsSlice from 'webapp/artist/reducer/artist.reducer';

const rootReducer = combineReducers({});

export default configureStore({
    reducer: {
        artists: artistsSlice,
    },
    middleware: [...getDefaultMiddleware(), logger],
});
