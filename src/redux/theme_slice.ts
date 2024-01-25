import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: "",
    },
    reducers: {
        setTheme(state, { payload }){
            return {
                ...state,
                theme: payload,
            }
            console.log("setTheme", state);
        },
    },
});

export const { setTheme } = themeSlice.actions;

export const selectTheme = (state: any) => state.name;

export default themeSlice.reducer;