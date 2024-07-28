import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@features/counter/counterSlice.ts'
export const store_root = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

export type RootState = ReturnType<typeof store_root.getState>;