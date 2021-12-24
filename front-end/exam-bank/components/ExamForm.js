import { useRouter } from "next/dist/client/router";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { modifiedAnswer } from "../pages/api/modifiedAnswer";
import Modal from "react-modal";
import Question from "./Question";
import { useDispatch, useSelector } from "react-redux";
import { initAnswers } from "../store/slices/answerSlice";

// Create form: question-answer-rightAnswer - 14-10-2021
// Update form: auto submit when timeout - 19-10-2021
// Update form: comfirm submit (time is continuous) - 19-10-2021
// Update form: form actually submits when user click confirm submit button - 11-01-2021

const customStyles = {
	content: {
		textAlign: "center",
		padding: "30px 60px",
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

export default function ExamForm({ timeout }) {
	const arr = [
		{
			question: "What is your name?",
			correctAnswer: "A",
			answers: ["Nguyễn Văn A", "Phạm Thị B", "Lê Văn C", "Trần Thị D "],
		},
		{
			question: "How old are you?",
			correctAnswer: "C",
			answers: ["12", "18", "20", "22"],
		},
		{
			question: "Where are you live?",
			correctAnswer: "B",
			answers: ["TP. Hồ Chí Minh", "Đồng Nai", "Bình Dương", "Khánh Hoà"],
		},
		{
			question: "Which major are you studying? ",
			correctAnswer: "D",
			answers: [
				"Computer Sience",
				"Information Systems",
				"Information Technology",
				"Software Engineering",
			],
		},
		{
			question: "What is your name?",
			correctAnswer: "A",
			answers: ["Nguyễn Văn A", "Phạm Thị B", "Lê Văn C", "Trần Thị D "],
		},
		{
			question: "How old are you?",
			correctAnswer: "C",
			answers: ["12", "18", "20", "22"],
		},
		{
			question: "Where are you live?",
			correctAnswer: "B",
			answers: ["TP. Hồ Chí Minh", "Đồng Nai", "Bình Dương", "Khánh Hoà"],
		},
		{
			question: "Which major are you studying? ",
			correctAnswer: "D",
			answers: [
				"Computer Sience",
				"Information Systems",
				"Information Technology",
				"Software Engineering",
			],
		},
	];

	// let arr = [];
	// router.query.exam != undefined
	// 	? (arr = JSON.parse(router.query.exam))
	// 	: (arr = null);

	const router = useRouter();

	const [submit, setSubmit] = useState(false); // Xử lý hết thời gian
	// const [confirmSubmit, setConfirmSubmit] = useState(false);
	// const [correctAnswer, setCorrectAnswer] = useState(0);
	const dispatch = useDispatch();

	const { register, handleSubmit, watch, setValue } = useForm();

	const setValueRadioButton = (fields) => {
		// const keys = Object.keys(fields);
		// const value = Object.values(fields);
		// keys.forEach((e, i) => {
		// 	setValue(e, value[i]);
		// });

		const fieldsArray = Object.entries(fields);
		fieldsArray.forEach((e) => {
			setValue(e[0], e[1]);
		});
	};

	useEffect(() => {
		const fields = JSON.parse(localStorage.getItem("fields")); // Lấy dữ liệu "fields" (fields là 1 object chứa các đáp án được chọn) từ localStorage
		if (fields) setValueRadioButton(fields); // set các đáp án được chọn vào đề thì băng hàm setValue của React Hook Form
		const selectedAnswers = fields ? Object?.values(fields) : []; // tạo mảng selectedAnswers để lưu vào Redux
		// Tạo action để dispatch vào Redux (mục đích để tạo mảng đáp án truyền qua component StateBox)
		const action =
			arr?.length != null
				? selectedAnswers.some(
						(e) => e === "A" || e === "B" || e === "C" || e === "D",
				  )
					? initAnswers(selectedAnswers)
					: initAnswers(arr.length)
				: initAnswers(0);
		dispatch(action);
	}, []);

	const watchAllFields = watch(); // trạng thái hiện tại của đề thi

	// Khi thay đổi trạng thái đề thi (chọn hoặc thay đổi đáp án) thì sẽ lưu lại vào localStorage
	useEffect(() => {
		localStorage.setItem("fields", JSON.stringify(watchAllFields));
	}, [watchAllFields]);

	const onSubmit = (data) => {
		console.log("data", data);

		// Submit thành công thì xóa các field trong localStorage
		localStorage.removeItem("fields");
		localStorage.removeItem("remainTimeSaved");
		localStorage.removeItem("currentTimeSaved");

		const answers = modifiedAnswer(data); //  Mođified mảng đáp án đã chọn
		let noOfCorrectAnswer = 0;
		arr.forEach((e, i) => {
			if (e.correctAnswer === answers[i]) noOfCorrectAnswer++; // Tính số câu đúng
		});
		console.log(noOfCorrectAnswer);
		// setCorrectAnswer(noOfCorrectAnswer);
	};

	const buttonSubmit = useRef(); // sử dụng useRef để lấy ra button submit (tương tự document.getElement...)

	// Xử lý hết thời gian làm bài
	useEffect(() => {
		if (timeout == true) {
			buttonSubmit.current.click(); // Hết thời gian thì sẽ click vào button Submit
			setSubmit(false);
		}
	}, [timeout]);

	return (
		<div className="mt-5 flex-1">
			<form onSubmit={handleSubmit(onSubmit)}>
				{arr?.map((e, i) => (
					<Question
						key={i}
						index={i}
						register={register}
						label={`answer${i}`}
						question={e.question}
						type="radio"
						answers={e.answers}
					/>
				))}
				{/* button thật để submit form, user sẽ không click được, khi nào xác nhận
                nộp bài (button Modal) hoặc hết giờ làm bài thì mới gọi ref để click */}
				<button className="hidden" ref={buttonSubmit} type="submit">
					Submit
				</button>
			</form>
			{/* button submit giả cho user click để hiện Modal xác nhận nộp bài*/}
			<div className="flex justify-center mr-44">
				<button
					className="bg-blue-400 py-2 px-8 mt-4 font-bold text-gray-50 text-xl rounded-lg"
					onClick={() => setSubmit(true)}
				>
					NỘP BÀI
				</button>
			</div>
			<Modal
				isOpen={submit}
				style={customStyles}
				contentLabel="Modal"
				ariaHideApp={false}
			>
				<h2 className="font-bold text-xl text-red-500">Xác nhận nộp bài</h2>
				{/* nếu click thì gọi ref của button submit thật để submit */}

				<div className="flex justify-around mt-5">
					<button
						className="bg-blue-400 py-2 px-8 mt-4 mr-3 font-bold text-gray-50 text-lg rounded-lg"
						onClick={() => {
							buttonSubmit.current.click();
							router.push("/result");
						}}
					>
						Nộp bài
					</button>
					<button
						className="bg-yellow-400 py-2 px-8 mt-4 ml-3 font-bold text-gray-50 text-lg rounded-lg"
						onClick={() => setSubmit(false)}
					>
						Làm bài tiếp
					</button>
				</div>
			</Modal>
		</div>
	);
}
