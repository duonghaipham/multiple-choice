import axiosClient from "./axiosClient";

const authApi = {
	login: (data) => {
		const url = "/login";
		return axiosClient.post(url, data);
	},

	logout: () => {
		const url = "/login/logout";
		return axiosClient.post(url);
	},

	register: (data) => {
		const url = "/users/register";
		return axiosClient.post(url, data);
	},
};

export default authApi;
