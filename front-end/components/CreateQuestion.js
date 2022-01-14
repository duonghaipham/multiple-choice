// Done form: question-answer-rightAnswer - 10-14-2021
// Done form: Validation - 10-30-2021
// Update form: change value answer number (0,1,2,3) to string ('A','B',..) - 11-01-2021
// Update form: change form using useFormState - 11-07-2021
// Update form: remove yup, use "required" of useForm - 11-07-2021

import { ErrorMessage } from "@hookform/error-message";

function CreateQuestion({ register, errors, label }) {
	const labelQuestion = label + "content";
	const labelCorrectOption = label + "correctOption";
	const labelOptions = [
		label + "optionA",
		label + "optionB",
		label + "optionC",
		label + "optionD",
	];
	// const [checkBox, setCheckBox] = useState(false);

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
				placeholder="Nhập nội dung câu hỏi"
				{...register(labelQuestion, {
					required: true,
				})}
				type="text"
			/>
			<ErrorMessage
				errors={errors}
				name={labelCorrectOption}
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
							{...register(labelCorrectOption, { required: true })}
							// type={checkBox ? 'checkbox' : 'radio'}
							type="radio"
							value="0"
						/>
						<span className="absolute -top-5 left-14 text-lg px-3 font-semibold">
							Đáp án A
						</span>
						<textarea
							className="mx-3 mb-3 mt-3 h-14 p-2 w-full rounded-xl border border-gray-500 bg-transparent text-lg focus:outline-none"
							{...register(labelOptions[0], { required: true })}
							type="text"
						/>
					</label>
					<ErrorMessage
						errors={errors}
						name={labelOptions[0]}
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
							{...register(labelCorrectOption, { required: true })}
							// type={checkBox ? 'checkbox' : 'radio'}
							type="radio"
							value="1"
						/>
						<span className="absolute -top-5 left-14 text-lg px-3 font-semibold">
							Đáp án B
						</span>
						<textarea
							className="mx-3 mb-3 mt-3 h-14 p-2 w-full rounded-xl border border-gray-500 bg-transparent text-lg focus:outline-none"
							{...register(labelOptions[1], { required: true })}
							type="text"
						/>
					</label>
					<ErrorMessage
						errors={errors}
						name={labelOptions[1]}
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
							{...register(labelCorrectOption, { required: true })}
							// type={checkBox ? 'checkbox' : 'radio'}
							type="radio"
							value="2"
						/>
						<span className="absolute -top-5 left-14 text-lg px-3 font-semibold">
							Đáp án C
						</span>
						<textarea
							className="mx-3 mb-3 mt-3 h-14 p-2 w-full rounded-xl border  border-gray-500 bg-transparent text-lg focus:outline-none"
							{...register(labelOptions[2], { required: "Hãy thêm đáp án C" })}
							type="text"
						/>
					</label>
					<ErrorMessage
						errors={errors}
						name={labelOptions[2]}
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
							{...register(labelCorrectOption, { required: true })}
							// type={checkBox ? 'checkbox' : 'radio'}
							type="radio"
							value="3"
						/>
						<span className="absolute -top-5 left-14 text-lg px-3 font-semibold">
							Đáp án D
						</span>
						<textarea
							className="mx-3 mb-3 mt-3 h-14 p-2 w-full rounded-xl border border-gray-500 bg-transparent text-lg focus:outline-none"
							{...register(labelOptions[3], { required: true })}
						/>
					</label>
					<ErrorMessage
						errors={errors}
						name={labelOptions[3]}
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

export default CreateQuestion;
