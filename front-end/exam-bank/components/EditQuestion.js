import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";

// Done form: question-answer-rightAnswer - 14-10-2021
// Done form: Validation - 10-30-2021
// Update form: change form using useFormState - 11-07-2021
// Update form: remove yup, use "required" of useForm - 11-07-2021

function EditQuestion({
	register,
	errors,
	label,
	question,
	correctAnswer,
	answers,
}) {
	const labelQuestion = label + "question";
	const labelCorrectAnswer = label + "correctAnswer";
	const labelAnswers = [
		label + "answerA",
		label + "answerB",
		label + "answerC",
		label + "answerD",
	];
	// const [checkBox, setCheckBox] = useState(false);

	const [questionChange, setQuestionChange] = useState(question);
	const [correctAnswerChange, setCorrectAnswersChange] =
		useState(correctAnswer);
	const [answersChange, setAnswersChange] = useState([
		answers != undefined ? answers[0] : null,
		answers != undefined ? answers[1] : null,
		answers != undefined ? answers[2] : null,
		answers != undefined ? answers[3] : null,
	]);

	const updateAnswersChanged = (index) => (e) => {
		let newArr = [...answersChange];
		newArr[index] = e.target.value;

		setAnswersChange(newArr);
	};

	return (
		<div className="w-full">
			<ErrorMessage
				errors={errors}
				name={labelQuestion}
				render={() => (
					<span className="bg-red-200 py-1 px-2 rounded text-red-900 font-semibold">
						Hãy thêm nội dung cho câu hỏi.
					</span>
				)}
			/>
			<textarea
				className="w-full h-24 p-2 text-lg border border-gray-600 rounded-lg focus:outline-none"
				{...register(labelQuestion, {
					required: true,
				})}
				type="text"
				value={questionChange}
				onChange={(e) => setQuestionChange(e.target.value)}
			/>
			{/* <div className="flex items-center">
				<input
					className="mx-3 h-5 w-5"
					type="checkbox"
					onClick={() => setCheckBox(!checkBox)}
					{...register(mulChoice)}
				/>
				<label htmlFor="">Câu hỏi nhiều đáp án</label>
			</div> */}
			<ErrorMessage
				errors={errors}
				name={labelCorrectAnswer}
				render={() => (
					<span className="bg-red-200 py-1 px-2 rounded text-red-900 font-semibold">
						Hãy chọn đáp án đúng.
					</span>
				)}
			/>
			<div className="flex flex-col mt-4">
				<div className="mb-4">
					<label className="flex items-center relative mt-2">
						<input
							className="mr-3 h-6 w-6 "
							{...register(labelCorrectAnswer, { required: true })}
							// type={checkBox ? 'checkbox' : 'radio'}
							type="radio"
							value="A"
							checked={correctAnswerChange === "A"}
							onClick={(e) => {
								setCorrectAnswersChange(e.target.value);
							}}
						/>
						<span className="absolute -top-5 left-14 text-lg px-3 font-semibold">
							Đáp án A
						</span>
						<textarea
							className="mx-3 my-1 h-14 p-2 w-full rounded-xl border border-gray-500 bg-transparent text-lg focus:outline-none"
							{...register(labelAnswers[0], { required: true })}
							type="text"
							value={answersChange[0]}
							onChange={updateAnswersChanged(0)}
						/>
					</label>
					<ErrorMessage
						errors={errors}
						name={labelAnswers[0]}
						render={() => (
							<span className="bg-red-200 py-1 px-2 rounded text-red-900 font-semibold">
								Hãy thêm nội dung cho đáp án A.
							</span>
						)}
					/>
				</div>
				<div className="mb-4">
					<label className="flex items-center relative mt-2">
						<input
							className="mr-3 h-6 w-6 "
							{...register(labelCorrectAnswer, { required: true })}
							// type={checkBox ? 'checkbox' : 'radio'}
							type="radio"
							value="B"
							checked={correctAnswerChange === "B"}
							onClick={(e) => {
								setCorrectAnswersChange(e.target.value);
							}}
						/>
						<span className="absolute -top-5 left-14 text-lg px-3 font-semibold">
							Đáp án B
						</span>
						<textarea
							className="mx-3 my-1 h-14 p-2 w-full rounded-xl border border-gray-500 bg-transparent text-lg focus:outline-none"
							{...register(labelAnswers[1], { required: true })}
							type="text"
							value={answersChange[1]}
							onChange={updateAnswersChanged(1)}
						/>
					</label>
					<ErrorMessage
						errors={errors}
						name={labelAnswers[1]}
						render={() => (
							<span className="bg-red-200 py-1 px-2 rounded text-red-900 font-semibold">
								Hãy thêm nội dung cho đáp án B.
							</span>
						)}
					/>
				</div>
				<div className="mb-4">
					<label className="flex items-center relative mt-2">
						<input
							className="mr-3 h-6 w-6 "
							{...register(labelCorrectAnswer, { required: true })}
							// type={checkBox ? 'checkbox' : 'radio'}
							type="radio"
							value="C"
							checked={correctAnswerChange === "C"}
							onClick={(e) => {
								setCorrectAnswersChange(e.target.value);
							}}
						/>
						<span className="absolute -top-5 left-14 text-lg px-3 font-semibold">
							Đáp án C
						</span>
						<textarea
							className="mx-3 my-1 h-14 p-2 w-full rounded-xl border border-gray-500 bg-transparent text-lg focus:outline-none"
							{...register(labelAnswers[2], { required: true })}
							type="text"
							value={answersChange[2]}
							onChange={updateAnswersChanged(2)}
						/>
					</label>
					<ErrorMessage
						errors={errors}
						name={labelAnswers[2]}
						render={() => (
							<span className="bg-red-200 py-1 px-2 rounded text-red-900 font-semibold">
								Hãy thêm nội dung cho đáp án C.
							</span>
						)}
					/>
				</div>
				<div className="mb-4">
					<label className="flex items-center relative mt-2">
						<input
							className="mr-3 h-6 w-6 "
							{...register(labelCorrectAnswer, { required: true })}
							// type={checkBox ? 'checkbox' : 'radio'}
							type="radio"
							value="D"
							checked={correctAnswerChange === "D"}
							onClick={(e) => {
								setCorrectAnswersChange(e.target.value);
							}}
						/>
						<span className="absolute -top-5 left-14 text-lg px-3 font-semibold">
							Đáp án D
						</span>
						<textarea
							className="mx-3 my-1 h-14 p-2 w-full rounded-xl border border-gray-500 bg-transparent text-lg focus:outline-none"
							{...register(labelAnswers[3], { required: true })}
							type="text"
							value={answersChange[3]}
							onChange={updateAnswersChanged(3)}
						/>
					</label>
					<ErrorMessage
						errors={errors}
						name={labelAnswers[3]}
						render={() => (
							<span className="bg-red-200 py-1 px-2 rounded text-red-900 font-semibold">
								Hãy thêm nội dung cho đáp án D.
							</span>
						)}
					/>
				</div>
			</div>
		</div>
	);
}

export default EditQuestion;
