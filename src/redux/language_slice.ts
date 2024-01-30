import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
    name: "language",
    initialState: {
        language: "",
    },
    reducers: {
        setLanguage(state, { payload }){
            return {
                ...state,
                language: payload,
            }
            console.log("setLanguage", state);
        },
    },
});

export const { setLanguage } = languageSlice.actions;

export const selectLanguage = (state: any) => state.name;

export default languageSlice.reducer;