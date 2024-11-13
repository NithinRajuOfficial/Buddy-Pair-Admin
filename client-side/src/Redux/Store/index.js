import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import isOpenSlice from "../Reducers/isOpenSlice.js";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, isOpenSlice);

const store = configureStore({
  reducer: {
    isOpen: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
      devTools: import.meta.env.NODE_ENV !== "production",
    }),
});

export const persistor = persistStore(store);
export default store;
