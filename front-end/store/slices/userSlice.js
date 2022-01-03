import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
	name: "user",
	initialState: null,
	reducers: {
		login: (state, action) => {
			state = action.payload;
			return state;
		},
		logout: (state, action) => {
			state = null;
			return state;
		},
	},
});

const { reducer, actions } = user;
export const { login, logout } = actions;
export default reducer;
