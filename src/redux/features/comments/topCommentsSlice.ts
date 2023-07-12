import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import api from "../../../utils/axios.config"

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

export const topComments = createAsyncThunk('anime/topcomment', async () => {
    return api.get(`/comments/top?limit=8`).then((response) => {
        return response.data.data
    })
    .catch((error) => {
        switch (error.response.status) {
            case 400:
                return rejectWithValue(error.response.data.error);
            case 404:
                return rejectWithValue(error.response.data.message);
            default:
                return rejectWithValue(error.response.data.message);
        }
    })
})


const commentsTop = createSlice({
    name: 'topComments',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(topComments.pending, (state) => {
            state.loading = true
        })
        builder.addCase(topComments.fulfilled, (state, action: PayloadAction<COMMENT[]>) => {
            state.loading = false
            state.data = action.payload
            state.error = ''
        })
        builder.addCase(topComments.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || 'Unknown Error 😢'
        })
    },
})

export default commentsTop.reducer
