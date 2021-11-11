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
	];

	// let arr = [];
	// router.query.exam != undefined
	// 	? (arr = JSON.parse(router.query.exam))
	// 	: (arr = null);

	const router = useRouter();

	const [submit, setSubmit] = useState(false);
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
		const fields = JSON.parse(localStorage.getItem("fields"));
		if (fields) setValueRadioButton(fields);
		const selectedAnswers = fields ? Object?.values(fields) : [];
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

	const watchAllFields = watch();

	useEffect(() => {
		localStorage.setItem("fields", JSON.stringify(watchAllFields));
	}, [watchAllFields]);

	const onSubmit = (data) => {
		console.log("data", data);
		localStorage.removeItem("fields");
		localStorage.removeItem("remainTimeSaved");
		localStorage.removeItem("currentTimeSaved");
		const answers = modifiedAnswer(data);
		let noOfCorrectAnswer = 0;
		arr.forEach((e, i) => {
			if (e.correctAnswer === answers[i]) noOfCorrectAnswer++;
		});
		console.log(noOfCorrectAnswer);
		// setCorrectAnswer(noOfCorrectAnswer);
	};

	const buttonSubmit = useRef();

	useEffect(() => {
		if (timeout == true) {
			buttonSubmit.current.click();
			setSubmit(false);
		}
	}, [timeout]);

	return (
		<div>
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
			<button onClick={() => setSubmit(true)}>Submit</button>
			<Modal
				isOpen={submit}
				style={customStyles}
				contentLabel="Modal"
				ariaHideApp={false}
			>
				<h2>Xác nhận nộp bài</h2>
				{/* nếu click thì gọi ref của button submit thật để submit */}
				<button
					onClick={() => {
						buttonSubmit.current.click();
						router.push("/result");
					}}
				>
					Nộp bài
				</button>
				<button onClick={() => setSubmit(false)}>Làm bài tiếp</button>
			</Modal>
		</div>
	);
}
