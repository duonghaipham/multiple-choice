import {
	combineReducers,
	configureStore,
	getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import answerReducer from "./slices/answerSlice";
import userReducer from "./slices/userSlice";
import timeReducer from "./slices/timeSlice";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["user"],
};

const rootReducer = combineReducers({
	answers: answerReducer,
	user: userReducer,
	time: timeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});

export const persistor = persistStore(store);

export default store;
