import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const updateSlice = createSlice({
  name: 'update',
  initialState,
  reducers: {
    updateRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    updateFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { updateRequest, updateSuccess, updateFailure } = updateSlice.actions;
export default updateSlice.reducer;
