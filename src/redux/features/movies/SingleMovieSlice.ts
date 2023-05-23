import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

type movie = {
    mal_id: string;
    title: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
    synopsis: string
    trailer: {
        url: string
        embed_url: string
    }
    streaming: Streaming[]
    thumb: string;
    type: string;
    status: string;
}

type InitialState = {
    loading: boolean
    movie: movie
    error: string
}

type Streaming = {
    url: string,
    name: string,
}

const initialState: InitialState = {
    loading: false,
    movie: {
        mal_id: '',
        title: '',
        images: {
          jpg: {
            image_url: '',
          },
        },
        synopsis: '',
        trailer: {
            url : '',
            embed_url: ''
        },
        streaming: [],
        thumb: '',
        type: '',
        status: ''
    },
    error: '',
}

export const fetchOne = createAsyncThunk('movie/fetchOne', async (id: string) => {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`)
    return response.data.data
})


const singleMovieSlice = createSlice({
    name: 'single',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchOne.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchOne.fulfilled, (state, action: PayloadAction<movie>) => {
            state.loading = false
            state.movie = action.payload
            state.error = ''
        })
        builder.addCase(fetchOne.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || 'Unknown Error 😢'
        })
    },
})

export default singleMovieSlice.reducer