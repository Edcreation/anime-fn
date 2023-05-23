import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

type Genre ={
    mal_id: number
    name: string
    url: string
    count: number
}

type InitialState = {
    loading: boolean
    genres: Genre[]
    error: string
}

const initialState: InitialState = {
    loading: false,
    genres: [],
    error: '',
}

export const getMovieGenre = createAsyncThunk('movie/getMovieGenre', async () => {
    const response = await axios.get(`https://api.jikan.moe/v4/genres/anime?filter=genres`)
    return response.data.data
})

const movieSlice = createSlice({
    name: 'movieSearch',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getMovieGenre.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getMovieGenre.fulfilled, (state, action: PayloadAction<Genre[]>) => {
            state.loading = false
            state.genres = action.payload
            state.error = ''
        })
        builder.addCase(getMovieGenre.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || 'Unknown Error 😢'
        })
    },
})

export default movieSlice.reducer