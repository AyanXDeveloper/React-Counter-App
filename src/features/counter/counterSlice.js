import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    initialState : 0,
    name : 'counter',
    reducers : {
        increment : (state) => state + 1,
        decrement : (state) => state - 1,
        changeByAmount : (state, action) => state + action.payload,
        incrementByStep : (state, action) => state + action.payload,
        decrementByStep : (state, action) => state - action.payload,
        reset : (state) => 0,
    }
})

export const { increment, decrement, changeByAmount, incrementByStep, decrementByStep, reset } = counterSlice.actions;
export default counterSlice.reducer;