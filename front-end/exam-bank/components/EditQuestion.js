import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";

// Done form: question-answer-rightAnswer - 14-10-2021
// Done form: Validation - 10-30-2021
// Update form: change form using useFormState - 11-07-2021
// Update form: remove yup, use "required" of useForm - 11-07-2021

function EditQuestion({
	register,
	errors,
	index,
	label,
	question,
	correctAnswer,
	answerA,
	answerB,
	answerC,
	answerD,
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
		answerA,
		answerB,
		answerC,
		answerD,
	]);

	const updateAnswersChanged = (index) => (e) => {
		let newArr = [...answersChange];
		newArr[index] = e.target.value;

		setAnswersChange(newArr);
	};

	return (
		<div className="w-full">
			<textarea
				className="w-full h-48 p-2 text-lg border border-gray-600 rounded-lg focus:outline-none "
				{...register(labelQuestion)}
				type="text"
				value={questionChange}
				onChange={(e) => setQuestionChange(e.target.value)}
			/>
			<ErrorMessage errors={errors} name={label} as="p" />
			{/* <p>{errors.q1 && errors.q1.message}</p> */}
			{/* <div className="flex items-center">
				<input
					className="mx-3 h-5 w-5"
					type="checkbox"
					onClick={() => setCheckBox(!checkBox)}
					{...register(mulChoice)}
				/>
				<label htmlFor="">Câu hỏi nhiều đáp án</label>
			</div> */}
			<div className="flex flex-col mt-4">
				<label className="flex items-center relative">
					<input
						className="mr-3 h-6 w-6 "
						{...register(labelCorrectAnswer)}
						// type={checkBox ? 'checkbox' : 'radio'}
						type="radio"
						value="0"
						checked={correctAnswerChange === "A"}
						onClick={(e) => {
							setCorrectAnswersChange(e.target.value);
						}}
					/>
					<span className="absolute -top-2 left-16 bg-green-300 text-lg px-3 font-bold">
						Đáp án A
					</span>
					<textarea
						className="m-3 p-2 w-full rounded-xl border border-gray-500 bg-transparent text-lg"
						{...register(labelAnswers[0])}
						type="text"
						value={answersChange[0]}
						onChange={updateAnswersChanged(0)}
					/>
				</label>
				<ErrorMessage errors={errors} name={labelAnswers[0]} as="p" />
				<label className="flex items-center relative">
					<input
						className="mr-3 h-6 w-6 "
						{...register(labelCorrectAnswer)}
						// type={checkBox ? 'checkbox' : 'radio'}
						type="radio"
						value="1"
						checked={correctAnswerChange === "B"}
						onClick={(e) => {
							setCorrectAnswersChange(e.target.value);
						}}
					/>
					<span className="absolute -top-2 left-16 bg-green-300 text-lg px-3 font-bold">
						Đáp án B
					</span>
					<textarea
						className="m-3 p-2 w-full rounded-xl border border-gray-500 bg-transparent text-lg"
						{...register(labelAnswers[1])}
						type="text"
						value={answersChange[1]}
						onChange={updateAnswersChanged(1)}
					/>
				</label>
				<ErrorMessage errors={errors} name={labelAnswers[1]} as="p" />
				<label className="flex items-center relative">
					<input
						className="mr-3 h-6 w-6 "
						{...register(labelCorrectAnswer)}
						// type={checkBox ? 'checkbox' : 'radio'}
						type="radio"
						value="2"
						checked={correctAnswerChange === "C"}
						onClick={(e) => {
							setCorrectAnswersChange(e.target.value);
						}}
					/>
					<span className="absolute -top-2 left-16 bg-green-300 text-lg px-3 font-bold">
						Đáp án C
					</span>
					<textarea
						className="m-3 p-2 w-full rounded-xl border  border-gray-500 bg-transparent text-lg"
						{...register(labelAnswers[2])}
						type="text"
						value={answersChange[2]}
						onChange={updateAnswersChanged(2)}
					/>
				</label>
				<ErrorMessage errors={errors} name={labelAnswers[2]} as="p" />
				<label className="flex items-center relative">
					<input
						className="mr-3 h-6 w-6 "
						{...register(labelCorrectAnswer)}
						// type={checkBox ? 'checkbox' : 'radio'}
						type="radio"
						value="3"
						checked={correctAnswerChange === "D"}
						onClick={(e) => {
							setCorrectAnswersChange(e.target.value);
						}}
					/>
					<span className="absolute -top-2 left-16 bg-green-300 text-lg px-3 font-bold">
						Đáp án D
					</span>
					<textarea
						className="m-3 p-2 w-full rounded-xl border border-gray-500 bg-transparent text-lg"
						{...register(labelAnswers[3])}
						type="text"
						value={answersChange[3]}
						onChange={updateAnswersChanged(3)}
					></textarea>
				</label>
				<ErrorMessage errors={errors} name={labelAnswers[3]} as="p" />
				<ErrorMessage
					errors={errors}
					name={labelCorrectAnswer}
					render={() => <p>Hãy chọn đáp án đúng</p>}
				/>
			</div>
		</div>
	);
}

export default EditQuestion;
