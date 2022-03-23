// Npm imports
import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

const initialState: number[] = []

export const fileOrderSlice = createSlice({
    name: 'fileOrder',
    initialState: initialState,
    reducers: {
        addFile: (state, { payload }:PayloadAction<number>) =>  {
            state.push(payload)
        },
        removeFile: (state, { payload }:PayloadAction<number>) => {
            state.splice(payload, 1)
        },
    }
})

export const { addFile, removeFile } = fileOrderSlice.actions;

export default fileOrderSlice.reducer;