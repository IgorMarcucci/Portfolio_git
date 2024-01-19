import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
    name: "name",
    initialState: {
        name: "",
    },
    reducers: {
        setName(state, { payload }){
            return {
                ...state,
                name: payload,
            }
            console.log("setName", state)
        },
        deleteName(state){
            return {
                ...state,
                name: "",
            }
        }
    },
});

export const { setName, deleteName } = nameSlice.actions;

export const selectName = (state: any) => state.name;

export default nameSlice.reducer;