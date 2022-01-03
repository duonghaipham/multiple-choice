import moment from "moment";
import router from "next/router";

function ViewResult({ examReview }) {
	return (
		<div className="grid place-content-center my-14 ">
			<div className="py-12 px-20 bg-gray-200 bg-opacity-25 shadow-lg">
				<div>
					<h1 className="text-3xl font-bold text-green-800 ">
						{examReview?.exam?.subject}
					</h1>

					<h3 className="text-yellow-500 text-2xl font-semibold cursor-pointer mt-3">
						{examReview?.exam?.name}
					</h3>
				</div>

				<div className="border p-2">
					<h4 className="text-md text-gray-600 font-semibold">
						Người đăng:{" "}
						<span className="text-yellow-500 ">
							{examReview?.exam?.creator?.name}
						</span>
					</h4>
					<h4 className="text-md text-gray-600 font-semibold">
						Ngày đăng:{" "}
						<span className="text-yellow-500 ">
							{moment
								.utc(examReview?.exam?.openedAt)
								.local()
								.format("DD/MM/YYYY")}
						</span>
					</h4>
				</div>

				<div className="text-center my-3">
					<h4 className="text-md text-gray-600 font-semibold">
						Thời gian:{" "}
						<span className="text-yellow-500 ">
							{examReview?.exam?.minuteLimit} phút
						</span>
					</h4>
					<h4 className="text-md text-gray-600 font-semibold">
						Số câu:{" "}
						<span className="text-yellow-500 ">
							{examReview?.exam?.questions?.length}
						</span>
					</h4>
				</div>
				<div className="flex justify-center my-10">
					<table className="w-full">
						<tr className="bg-blue-400 text-white">
							<th className="w-1/2">Trạng thái</th>
							<th className="w-1/4">Thời gian</th>
							<th className="w-1/4">Kết quả</th>
						</tr>
						<tr>
							<td>
								<h5>Hoàn thành</h5>
								<p>
									Nộp lúc{" "}
									{moment
										.utc(examReview?.submittedAt)
										.local()
										.format("DD/MM/YYYY h:mm:ss a")}
								</p>
							</td>
							<td className="text-center">23 phút 27 giây</td>
							<td className="text-center font-bold">
								<span className="text-red-600">{examReview?.outOf}</span>/
								{examReview?.exam?.questions?.length}
							</td>
						</tr>
					</table>
				</div>
				<div className="flex justify-center mb-5">
					<button
						className="bg-green-400 py-2 px-8 mt-4 mr-3 font-bold text-gray-50 text-lg rounded-lg"
						onClick={() =>
							router.push({
								pathname: "resultDetail",
								query: {
									examResult: JSON.stringify(examReview),
								},
							})
						}
					>
						Xem đáp án
					</button>
				</div>
			</div>
		</div>
	);
}

export default ViewResult;
