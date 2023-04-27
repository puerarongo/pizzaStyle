import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default persistor;
