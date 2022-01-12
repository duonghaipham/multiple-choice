import moment from "moment";
import router from "next/router";

function ViewResult({ examReview }) {
	console.log(examReview);
	const takingTime = moment
		.utc(examReview?.secondTaken * 1000)
		.format("HH:mm:ss");

	const arrDiff = takingTime.split(":");
	const hours = parseInt(arrDiff[0]);
	const minutes = parseInt(arrDiff[1]);
	const seconds = parseInt(arrDiff[2]);

	return (
		<div className="flex justify-center my-20 md:my-14">
			<div className=" w-full sm:w-2/3 md:w-3/4 lg:w-1/2 mx-3 px-3 py-5 lg:py-12 sm:p-12 md:px-20 bg-gray-300 bg-opacity-25 shadow-lg">
				<div className="mb-3">
					<span className="text-3xl font-bold text-green-800 ">
						{examReview?.exam?.subject}
						<span> |</span>
					</span>
					<span className="text-yellow-500 text-2xl font-semibold cursor-pointer my-3">
						<span>| </span>
						{examReview?.exam?.name}
					</span>
				</div>

				<div className="border p-2">
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

				<div className="text-center my-3"></div>
				<div className="flex justify-center my-3 lg:my-10">
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
							<td className="text-center">
								{hours === 0
									? null
									: hours < 10
									? hours + " giờ "
									: hours + " phút "}
								{minutes === 0
									? hours > 0
										? " "
										: null
									: minutes < 10
									? minutes + " phút "
									: minutes + " phút"}
								{seconds === 0 ? "" : seconds + " giây"}
							</td>
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
