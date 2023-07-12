import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import api from "../../../utils/axios.config";

type InitialState = {
    loading: boolean
    token: string
    error: string
}

type USER = {
    email: string,
    password: string
}

const initialState: InitialState = {
    loading: false,
    token: '',
    error: '',
}

function rejectWithValue(error: string) {
    throw new Error(error)
}

export const login = createAsyncThunk('user/login', async (data: USER) => {
    return api.post('/users/login', data).then((response) => {
        return response.data.data
    })
    .catch((error) => {
        switch (error.response.status) {
            case 406:
                return rejectWithValue(error.response.data.error);
            case 401:
                return rejectWithValue(error.response.data.message);
            default:
                return rejectWithValue(error.response.data.message);
        }
    })
})


const userLogin = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.pending, (state) => {
            state.loading = true
        })
        builder.addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
            state.loading = false
            state.token = action.payload
            state.error = ''
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || 'Unknown Error 😢'
        })
    },
})

export default userLogin.reducer
