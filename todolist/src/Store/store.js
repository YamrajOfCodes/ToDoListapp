import { configureStore } from "@reduxjs/toolkit";
import noteslice from "../Slices/noteslice";

export default configureStore({
    reducer:{
    notesReducer:noteslice
    }
})