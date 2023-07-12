import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import api from "../../../utils/axios.config"
import store from "../../store"

type InitialState = {
    loading: boolean
    data: COMMENT
    error: string
}

type COMMENT = {
    ani_id: string
    user: string
    comment: string
}

const initialState: InitialState = {
    loading: false,
    data: {
        ani_id: '',
        user: '',
        comment: '',
    },
    error: '',
}

function rejectWithValue(error: string) {
    throw new Error(error)
}



export const postComment = createAsyncThunk('anime/add_comment', async (data: { id: string, comment: string }) => {
    const token = store.getState().login.token
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const comment = {
        comment: data.comment
    }

    return api.post(`/comments/create/${data.id}`, comment, config).then((response) => {
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
        builder.addCase(postComment.pending, (state) => {
            state.loading = true
        })
        builder.addCase(postComment.fulfilled, (state, action: PayloadAction<COMMENT>) => {
            state.loading = false
            state.data = action.payload
            state.error = ''
        })
        builder.addCase(postComment.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || 'Unknown Error 😢'
        })
    },
})

export default Comments.reducer
