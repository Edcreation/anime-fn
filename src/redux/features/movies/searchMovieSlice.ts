import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

type movie = {
    mal_id: number;
    title: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
    thumb: string;
    type: string;
    status: string;
}

type InitialState = {
    loading: boolean
    movies: movie[]
    error: string
}

const initialState: InitialState = {
    loading: false,
    movies: [],
    error: '',
}

export const fetchMoviesBy = createAsyncThunk('movie/fetchMoviesBy', async (query: string) => {
    const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}&sfw=false`)
    return response.data.data
})

const movieSlice = createSlice({
    name: 'movieSearch',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchMoviesBy.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchMoviesBy.fulfilled, (state, action: PayloadAction<movie[]>) => {
            state.loading = false
            state.movies = action.payload
            state.error = ''
        })
        builder.addCase(fetchMoviesBy.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || 'Unknown Error 😢'
        })
    },
})

export default movieSlice.reducer