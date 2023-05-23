import { combineReducers, configureStore } from '@reduxjs/toolkit'
import movieReducer from './features/movies/movieSlice'
import searchMovieReducer from './features/movies/searchMovieSlice'
import SingleMovieReducer from './features/movies/SingleMovieSlice'
import genreReducer from './features/movies/genreSlice'
import loginReducer from './features/auth/userLoginSlice'
import userSignUpReducer from './features/auth/userSignUpSlice'
import commentsReducer from './features/comments/commentsSlice'
import postCommentReducer from './features/comments/postCommentSlice'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/es/storage'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist'
import topCommentsReducer from './features/comments/topCommentsSlice'

const reducers = {
    movies: movieReducer,
    searchMovies: searchMovieReducer,
    singleMovie: SingleMovieReducer,
    genre: genreReducer,
    login: loginReducer,
    signup: userSignUpReducer,
    comments: commentsReducer,
    addComments: postCommentReducer,
    topComments: topCommentsReducer
}

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['login'],
};

const persistedReducer = persistReducer(persistConfig, combineReducers(reducers));


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

const persistor = persistStore(store);

export { persistor };

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
