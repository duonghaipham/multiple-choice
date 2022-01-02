import axiosClient from "./axiosClient";

const userApi = {
	getAll: (params) => {
		const url = "/admin/users";
		return axiosClient.get(url, { params });
	},

	create: () => {
		const url = `admin/users/create`;
		return axiosClient.post(url);
	},

	update: (id, data, token) => {
		const url = `admin/users/${id}/update`;
		return axiosClient.put(url, data, {
			access_token: token,
		});
	},

	delete: (id) => {
		const url = `admin/users/${id}/delete`;
		return axiosClient.delete(url);
	},
};

export default userApi;
