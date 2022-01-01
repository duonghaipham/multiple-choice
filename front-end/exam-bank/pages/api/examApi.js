import axiosClient from "./axiosClient";

const examApi = {
	getAll: (params) => {
		const url = "/exams";
		return axiosClient.get(url, { params });
	},

	get: (id) => {
		const url = `/exams/${id}/take`;
		return axiosClient.get(url);
	},

	delete: (id) => {
		const url = `/admin/exams/${id}/delete`;
		return axiosClient.delete(url);
	},
};

export default examApi;
