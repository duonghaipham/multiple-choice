import router from "next/router";
import ViewQuestionResult from "./ViewQuestionResult";

function ViewResult() {
	return (
		<div className="grid place-content-center my-24">
			<div className="">
				<h1 className="text-3xl font-bold text-green-800 ">Lịch Sử</h1>

				<h3 className="text-yellow-500 text-2xl font-semibold cursor-pointer mt-3">
					Đề thi tham khảo Lịch sử Bộ Giáo dục và Đào tạo năm 2021
				</h3>
			</div>
			<div className="border p-2">
				<h4 className="text-md text-gray-600 font-semibold">
					Người đăng: <span className="text-yellow-500 ">Nguyễn Văn A</span>
				</h4>
				<h4 className="text-md text-gray-600 font-semibold">
					Ngày đăng: <span className="text-yellow-500 ">09/10/2021</span>
				</h4>
				<h4 className="text-md text-gray-600 font-semibold">
					Đã làm bài: <span className="text-yellow-500 ">99</span>
				</h4>
			</div>
			<p className="my-1">Học hết nội dung trong sách</p>
			<div className="text-center my-3">
				<h4 className="text-md text-gray-600 font-semibold">
					Số lần làm bài: <span className="text-yellow-500 ">1</span>
				</h4>
				<h4 className="text-md text-gray-600 font-semibold">
					Thời gian: <span className="text-yellow-500 ">60 phút</span>
				</h4>
				<h4 className="text-md text-gray-600 font-semibold">
					Số câu: <span className="text-yellow-500 ">20</span>
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
							<p>Nộp lúc 22:34:49 09/10/2021</p>
						</td>
						<td className="text-center">23 phút 27 giây</td>
						<td className="text-center font-bold">
							<span className="text-red-600">15</span>
							/20
						</td>
					</tr>
				</table>
			</div>
			<div className="flex justify-center mb-5">
				<button
					className="bg-green-400 py-2 px-8 mt-4 mr-3 font-bold text-gray-50 text-lg rounded-lg"
					onClick={() => router.push("resultDetail")}
				>
					Xem đáp án
				</button>
				<button className="bg-blue-400 py-2 px-8 mt-4 mr-3 font-bold text-gray-50 text-lg rounded-lg">
					Làm lại
				</button>
			</div>
		</div>
	);
}

export default ViewResult;
