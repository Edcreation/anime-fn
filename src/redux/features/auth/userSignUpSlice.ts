import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

type InitialState = {
    loading: boolean
    token: string
    error: string
}

type USER = {
    email: string,
    username: string,
    password: string
}

const initialState: InitialState = {
    loading: false,
    token:  '',
    error: '',
}

function rejectWithValue(error: string) {
    throw new Error(error)
}

export const signup = createAsyncThunk('user/signup', async (data: USER) => {
    return axios.post('http://localhost:5000/users/signup', data).then((response) => {
        return response.data.data
    })
    .catch((error) => {
        switch (error.response.status) {
            case 406:
                return rejectWithValue(error.response.data.error);
            case 409:
                return rejectWithValue(error.response.data.message);
            default:
                return rejectWithValue(error.response.data.message);
        }
    })
})


const userSignUp = createSlice({
    name: 'signup',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(signup.pending, (state) => {
            state.loading = true
        })
        builder.addCase(signup.fulfilled, (state, action: PayloadAction<string>) => {
            state.loading = false
            state.token = action.payload
            state.error = ''
        })
        builder.addCase(signup.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || 'Unknown Error 😢'
        })
    },
})

export default userSignUp.reducer
