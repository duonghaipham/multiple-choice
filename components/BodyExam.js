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
		<div className="w-3/4 flex justify-center">
			<ExamForm timeout={timeout} />
			<Modal
				isOpen={timeout}
				style={customStyles}
				contentLabel="Modal"
				ariaHideApp={false}
			>
				<h2>Bài thi của bạn đã được nộp</h2>
				<button onClick={() => router.push("/result")}>Xem kết quả</button>
			</Modal>
		</div>
	);
}

export default BodyExam;
