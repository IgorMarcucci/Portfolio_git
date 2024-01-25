import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./name_slice";
import langReducer from "./lang_slice";
import themeReducer from "./theme_slice";

export default configureStore({
    reducer: {
        name: nameReducer,
        lang: langReducer,
        theme: themeReducer,
    },
});