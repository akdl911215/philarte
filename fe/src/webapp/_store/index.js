import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import artistsSlice from 'webapp/artist/reducer/artist.reducer';
import reviewSlice from 'webapp/review/reducer/review.reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['artitst'],
};

const rootReducer = combineReducers({ artists: artistsSlice, reviews: reviewSlice });

//const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
});
