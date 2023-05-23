import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

type InitialState = {
    loading: boolean
    data: COMMENT[]
    error: string
}

type COMMENT = {
    _id: string
    ani_id: string
    user: { username: string }
    comment: string
    date: Date
}

const initialState: InitialState = {
    loading: false,
    data: [],
    error: '',
}

function rejectWithValue(error: string) {
    throw new Error(error)
}

export const comments = createAsyncThunk('anime/comment', async (id: string) => {
    return axios.get(`http://localhost:5000/comments/${id}`).then((response) => {
        return response.data.data
    })
    .catch((error) => {
        switch (error.response.status) {
            case 400:
                return rejectWithValue(error.response.data.error);
            case 401:
                return rejectWithValue(error.response.data.message);
            default:
                return rejectWithValue(error.response.data.message);
        }
    })
})


const Comments = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(comments.pending, (state) => {
            state.loading = true
        })
        builder.addCase(comments.fulfilled, (state, action: PayloadAction<COMMENT[]>) => {
            state.loading = false
            state.data = action.payload
            state.error = ''
        })
        builder.addCase(comments.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || 'Unknown Error 😢'
        })
    },
})

export default Comments.reducer
