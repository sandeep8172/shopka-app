import { configureStore } from "@reduxjs/toolkit"
import orderSlice from "./orderSlice";

const store = configureStore({
    reducer: orderSlice,
});
export default store;