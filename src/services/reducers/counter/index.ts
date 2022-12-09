import { createSlice } from "@reduxjs/toolkit"
import { ICounterState } from "services/models/counter"

const initialState: ICounterState = {
  number: 0
}

export const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: ICounterState) => {
      state.number = state.number + 1;
    },
    decrement: (state: ICounterState) => {
      state.number = state.number - 1;
    },
    reset: () => initialState
  }
})

export const { increment, decrement, reset } = counter.actions;

export default counter.reducer;