import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
    initialState: { step: 1 },
    name: 'input',
    reducers: {
        setStep: (state, action) => {
            state.step = Number(action.payload);
        },
        resetStep: (state) => {
            state.step = 1;
        }
    }
})

export const { setStep, resetStep } = inputSlice.actions;
export default inputSlice.reducer;
