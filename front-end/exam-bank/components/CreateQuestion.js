// Done form: question-answer-rightAnswer - 10-14-2021
// Done form: Validation - 10-30-2021
// Update form: change value answer number (0,1,2,3) to string ('A','B',..) - 11-01-2021
// Update form: change form using useFormState - 11-07-2021
// Update form: remove yup, use "required" of useForm - 11-07-2021

import { ErrorMessage } from "@hookform/error-message";

function CreateQuestion({ register, errors, index, label }) {
	const labelQuestion = label + "question";
	const labelCorrectAnswer = label + "correctAnswer";
	const labelAnswers = [
		label + "answerA",
		label + "answerB",
		label + "answerC",
		label + "answerD",
	];
	// const [checkBox, setCheckBox] = useState(false);

	return (
		<div className="w-full">
			<ErrorMessage errors={errors} name={labelQuestion} />
			<textarea
				className="w-full h-48 p-2 text-lg border border-gray-600 rounded-lg focus:outline-none "
				{...register(labelQuestion, { required: "This is required." })}
				type="text"
			/>
			{/* <div className="flex items-center">
				<input
					className="mx-3 h-5 w-5"
					type="checkbox"
					onClick={() => setCheckBox(!checkBox)}
					{...register(mulChoice)}
				/>
				<label htmlFor="">Câu hỏi nhiều đáp án</label>
			</div> */}{" "}
			<ErrorMessage
				errors={errors}
				name={labelCorrectAnswer}
				render={() => <p>Hãy chọn đáp án đúng</p>}
			/>
			<div className="flex flex-col mt-4">
				<ErrorMessage errors={errors} name={labelAnswers[0]} />
				<label className="flex items-center relative">
					<input
						className="mr-3 h-6 w-6 "
						{...register(labelCorrectAnswer, { required: true })}
						// type={checkBox ? 'checkbox' : 'radio'}
						type="radio"
						value="A"
					/>
					<span className="absolute -top-2 left-16 text-lg px-3 font-bold">
						Đáp án A
					</span>
					<textarea
						className="m-3 p-2 w-full rounded-xl border border-gray-500 bg-transparent text-lg"
						{...register(labelAnswers[0], { required: "Hãy thêm đáp án A" })}
						type="text"
					/>
				</label>

				<ErrorMessage errors={errors} name={labelAnswers[1]} />
				<label className="flex items-center relative">
					<input
						className="mr-3 h-6 w-6 "
						{...register(labelCorrectAnswer, { required: true })}
						// type={checkBox ? 'checkbox' : 'radio'}
						type="radio"
						value="B"
					/>
					<span className="absolute -top-2 left-16 text-lg px-3 font-bold">
						Đáp án B
					</span>
					<textarea
						className="m-3 p-2 w-full rounded-xl border border-gray-500 bg-transparent text-lg"
						{...register(labelAnswers[1], { required: "Hãy thêm đáp án B" })}
						type="text"
					/>
				</label>
				<ErrorMessage errors={errors} name={labelAnswers[2]} />
				<label className="flex items-center relative">
					<input
						className="mr-3 h-6 w-6 "
						{...register(labelCorrectAnswer, { required: "Hãy thêm đáp án C" })}
						// type={checkBox ? 'checkbox' : 'radio'}
						type="radio"
						value="C"
					/>
					<span className="absolute -top-2 left-16 text-lg px-3 font-bold">
						Đáp án C
					</span>
					<textarea
						className="m-3 p-2 w-full rounded-xl border  border-gray-500 bg-transparent text-lg"
						{...register(labelAnswers[2], { required: "Hãy thêm đáp án C" })}
						type="text"
					/>
				</label>
				<ErrorMessage errors={errors} name={labelAnswers[3]} />
				<label className="flex items-center relative">
					<input
						className="mr-3 h-6 w-6 "
						{...register(labelCorrectAnswer, { required: true })}
						// type={checkBox ? 'checkbox' : 'radio'}
						type="radio"
						value="D"
					/>
					<span className="absolute -top-2 left-16 text-lg px-3 font-bold">
						Đáp án D
					</span>
					<textarea
						className="m-3 p-2 w-full rounded-xl border border-gray-500 bg-transparent text-lg"
						{...register(labelAnswers[3], { required: "Hãy thêm đáp án D" })}
					/>
				</label>
			</div>
		</div>
	);
}

export default CreateQuestion;
