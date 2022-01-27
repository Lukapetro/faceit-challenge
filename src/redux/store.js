import { configureStore } from "@reduxjs/toolkit";
import postsMiddleware from "../features/posts/posts.mdl";
import reducer from "./reducer";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsMiddleware),
});

export default store;
