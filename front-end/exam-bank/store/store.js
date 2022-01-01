import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import answerReducer from "./slices/answerSlice";
import userReducer from "./slices/userSlice";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	answers: answerReducer,
	user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
