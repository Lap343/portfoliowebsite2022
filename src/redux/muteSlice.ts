import { createSlice } from '@reduxjs/toolkit';

export const muteSlice = createSlice({
    name: 'mute',
    initialState: { isMuted: false },
    reducers: {
        toggleMute: (state) =>  {
            state.isMuted = !state.isMuted
        }
    }
})

export const { toggleMute } = muteSlice.actions;

export default muteSlice.reducer;