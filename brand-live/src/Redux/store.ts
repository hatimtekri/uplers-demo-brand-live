import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pagination from "./slice/Pagination.slice";
import like from "./slice/like.slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const rootPersistConfig = {
  key: "root",
  version:1,
  storage,
};


const rootReducer = combineReducers({
  like,
  pagination,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
