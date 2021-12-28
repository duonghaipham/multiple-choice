import { configureStore } from "@reduxjs/toolkit";
import answerReducer from "./slices/answerSlice";
import userReducer from "./slices/userSlice";

const rootReducer = {
	answers: answerReducer,
	user: userReducer,
};

const store = configureStore({
	reducer: rootReducer,
});

export default store;
