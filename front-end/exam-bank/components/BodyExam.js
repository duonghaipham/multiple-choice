import { useRouter } from "next/dist/client/router";
import Modal from "react-modal";
import ExamForm from "./ExamForm";

// Done form: question-answer-rightAnswer - 14-10-2021
// Done form: auto submit when timeout - 19-10-2021

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

function BodyExam({ timeout }) {
	// const TimeoutModal = () => {
	// 	return (
	// 		<div>
	// 			<h2>Bài thi của bạn đã được nộp. Mời xem kết quả</h2>
	// 			<button onClick={() => router.push("/result")}>Xem kết quả</button>
	// 		</div>
	// 	);
	// };
	// const SubmitModal = () => {
	// 	return (
	// 		<div>
	// 			<h2>Xác nhận nộp bài</h2>
	// 			<button onClick={() => router.push("/result")}>Nộp bài</button>
	// 			<button onClick={() => setSubmit(false)}>Làm bài tiếp</button>
	// 		</div>
	// 	);
	// };

	const router = useRouter();
	return (
		<div className="flex-1 flex flex-col mx-10 px-10 py-10 bg-gray-200 bg-opacity-30 shadow-lg">
			<div className="">
				<h1 className="text-3xl font-bold text-green-800 ">Lịch Sử</h1>

				<h3 className="text-yellow-500 text-2xl font-semibold mt-3">
					Đề thi tham khảo Lịch sử Bộ Giáo dục và Đào tạo năm 2021
				</h3>
			</div>
			<ExamForm timeout={timeout} />
			<Modal
				isOpen={timeout}
				style={customStyles}
				contentLabel="Modal"
				ariaHideApp={false}
			>
				<h2 className="font-bold text-xl text-red-500">
					Bài thi của bạn đã được nộp
				</h2>

				<div className="flex justify-around mt-5">
					<button
						className="bg-green-400 py-2 px-8 mt-4 mr-3 font-bold text-gray-50 text-lg rounded-lg"
						onClick={() => {
							router.push("/result");
						}}
					>
						Xem kết quả
					</button>
				</div>
			</Modal>
		</div>
	);
}

export default BodyExam;
