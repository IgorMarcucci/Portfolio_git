import { createSlice } from "@reduxjs/toolkit";

export const langSlice = createSlice({
    name: "lang",
    initialState: {
        lang: [],
    },
    reducers: {
        setLang(state, { payload }){
            return {
                ...state,
                lang: payload,
            }
            console.log("setLang", state)
        },
        deleteLang(state){
            return {
                ...state,
                lang: [],
            }
        }
    },
});

export const { setLang, deleteLang } = langSlice.actions;

export const selectLang = (state: { lang: any; }) => state.lang;

export default langSlice.reducer;