import axiosClient from "./axiosClient";

const examApi = {
	getAll: (params, token) => {
		const url = "/exams";
		return axiosClient.get(
			url,
			{ params },
			{
				headers: {
					access_token: token,
				},
			},
		);
	},

	get: (id) => {
		const url = `/exams/${id}/take`;
		return axiosClient.get(url);
	},

	submit: (id, data, token) => {
		const url = `exams/${id}/take`;
		return axiosClient.post(url, data, {
			access_token: token,
		});
	},

	result: (id, attempt) => {
		const url = `exams/${id}/review/${attempt}`;
		return axiosClient.get(url);
	},

	create: (data, token) => {
		const url = `/admin/exams/create`;
		return axiosClient.post(url, data, {
			access_token: token,
		});
	},

	edit: (id, data, token) => {
		const url = `/admin/exams/${id}/update`;
		return axiosClient.put(url, data, {
			access_token: token,
		});
	},

	delete: (id) => {
		const url = `/admin/exams/${id}/delete`;
		return axiosClient.delete(url);
	},
};

export default examApi;
