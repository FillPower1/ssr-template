import { createReducer } from '@reduxjs/toolkit';

import { increment, decrement, incrementByAmount } from './actions';

export type CounterState = {
    value: number;
};

export const initialState = { value: 0 } as CounterState;

export default createReducer(initialState, builder => {
    builder
        .addCase(increment, state => {
            state.value += 1;
        })
        .addCase(decrement, state => {
            state.value -= 1;
        })
        .addCase(incrementByAmount, (state, action) => {
            state.value += action.payload;
        });
});
