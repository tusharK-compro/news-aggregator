import { createSlice } from '@reduxjs/toolkit'
import TheGuardianAdService from '../services/TheGuardianAdService';

let newsData;

export const newsDataSlice =  createSlice({
  name: 'newsData',
  initialState: {
    data:  []
  },
  reducers: {
    setPreferences: (state, action) => {

      state.data = action.payload;
    },
    clearPreferences: (state, action) => {
        state.data = action.payload;
      },
    setFilters: (state, action) => {
   
    state.data = action.payload;
    },
    clearFilters: (state, action) => {
   
    state.data = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPreferences, clearPreferences, setFilters,clearFilters } = newsDataSlice.actions

export default newsDataSlice.reducer