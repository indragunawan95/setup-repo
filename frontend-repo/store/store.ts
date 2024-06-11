import { configureStore } from '@reduxjs/toolkit';
import updateReducer from './reducers';

export const store = configureStore({
    reducer: {
        update: updateReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
