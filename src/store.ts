import { configureStore } from '@reduxjs/toolkit'
import reducer from "./reducers/newsDataSlice";

export default configureStore({reducer:reducer});