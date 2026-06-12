import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    initialState: {
        lang: "en"
    },
    name: 'lang',
    reducers: {
        setLang: (state, actions) => {
            state.lang = actions.payload
        }
    }
});

export const {setLang} = langSlice.actions;
export default langSlice.reducer;