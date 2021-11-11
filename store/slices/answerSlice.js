import { createSlice } from "@reduxjs/toolkit";

const answer = createSlice({
	name: "answers",
	initialState: [],
	reducers: {
		initAnswers: (state, action) => {
			return typeof action.payload == "number"
				? (state = new Array(action.payload).fill(null))
				: (state = action.payload);
		},
		chooseAnswer: (state, action) => {
			const questionIndex = action.payload.index;
			state[questionIndex] = action.payload.value;
		},
	},
});

const { reducer, actions } = answer;
export const { initAnswers, chooseAnswer } = actions;
export default reducer;
