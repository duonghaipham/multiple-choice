import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import ExamForm from "./ExamForm";
import axios from "axios";

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

function BodyExam({ timeout, exam }) {
	const router = useRouter();
	//console.log(exam);
	//const [exam, setExam] = useState({});
	//console.log(exam);
	// Fetch dữ liệu
	// useEffect(() => {
	// 	const fetchExam = async () => {
	// 		try {
	// 			const url = `http://localhost:5000/exams/${router.query.idExam}/take`;
	// 			const res = await axios.get(url);

	// 			setExam(res.data);
	// 		} catch (error) {
	// 			console.log("Failed to fetch exam:", error);
	// 		}
	// 	};
	// 	fetchExam();
	// }, []);

	return (
		<div className="flex-1 flex flex-col mx-10 px-10 py-10 bg-gray-200 bg-opacity-30 shadow-lg">
			<div className="w-3/4">
				<div className="">
					<div>
						<span className="text-3xl font-bold text-green-800 ">
							{exam.subject} |
						</span>
						<span className="text-yellow-500 text-2xl font-semibold mt-3">
							| {exam.name}
						</span>
					</div>
					<div className="flex flex-col w-full items-center">
						<span className=" text-xl font-semibold mt-3">
							Lớp: {exam.grade}
						</span>
						<span className=" text-lg font-semibold mt-3">
							Thời gian: {exam.minuteLimit} phút
						</span>
						<span className=" text-lg font-semibold mt-3">
							Số lần thi: {exam.attemptLimit}
						</span>
						<span className=" text-lg font-semibold mt-3">
							Người ra đề: {exam.creator?.name}
						</span>
					</div>
				</div>
				<ExamForm
					timeout={timeout}
					questions={exam.questions}
					idExam={exam._id}
				/>
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
		</div>
	);
}

export default BodyExam;
