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

const options = {
    method: 'GET',
    url: 'https://api.jikan.moe/v4/top/anime?filter=bypopularity',
};

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async () => {
    const response = await axios.request(options)
    return response.data.data
})

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchMovies.fulfilled, (state, action: PayloadAction<movie[]>) => {
            state.loading = false
            state.movies = action.payload
            state.error = ''
        })
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || 'Unknown Error 😢'
        })
    },
})

export default movieSlice.reducer