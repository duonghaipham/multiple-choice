import { createSlice } from "@reduxjs/toolkit";

const time = createSlice({
	name: "time",
	initialState: {
		time: null,
		timeout: false,
	},
	reducers: {
		initTime: (state, action) => {
			state.time = action.payload;
			return state;
		},
		timeout: (state, action) => {
			state.timeout = action.payload;
			return state;
		},
	},
});

const { reducer, actions } = time;
export const { initTime, timeout } = actions;
export default reducer;
