import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./name_slice";
import langReducer from "./lang_slice";

export default configureStore({
    reducer: {
        name: nameReducer,
        lang: langReducer,
    },
});