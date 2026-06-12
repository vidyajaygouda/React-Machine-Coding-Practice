import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../utils/userSlice';
import langReducer from '../utils/multiLangSlice'

const appStore  = configureStore({
    reducer: {
        user : userReducer,
        lang: langReducer
    }
});

export default appStore;