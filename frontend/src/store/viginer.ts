import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import axiosApi from "../axiosApi";

interface ViginerInterface {
    message: string;
}

const initialState: ViginerInterface = {
    message: '',
};

export const EncodedMessage = createAsyncThunk<string, ViginerInterface>('viginer/encode', async (arg) => {
    const response = await axiosApi.post('/encode', arg);

    return response.data.encoded;
});
export const DecodedMessage = createAsyncThunk<string, ViginerInterface>('viginer/decode', async (arg) => {
    const response = await axiosApi.post('/decode', arg);

    return response.data.decoded;
});

export const viginerSlice = createSlice({
    name: 'viginer',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(EncodedMessage.fulfilled, (state, action) => {
            state.message = action.payload;
        });
        builder.addCase(DecodedMessage.fulfilled, (state, action) => {
            state.message = action.payload;
        });
    },
});

export const ViginerReducer = viginerSlice.reducer;
export const Message = (state: RootState) => state.viginer.message;