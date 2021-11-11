import { configureStore } from "@reduxjs/toolkit";
import answerReducer from "./slices/answerSlice";

const rootReducer = {
	answers: answerReducer,
};

const store = configureStore({
	reducer: rootReducer,
});

export default store;
