// Done form: question-answer-rightAnswer - 14-10-2021
// Done form: Validation - 10-30-2021
// Update form: change value answer number (0,1,2,3) to string ('A','B',..) - 11-01-2021
// Update form: change form using useFormState - 11-07-2021
// Update form: remove yup, use "required" of useForm - 11-07-2021

import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import CreateQuestion from "./CreateQuestion";
import { useFieldArray, useForm } from "react-hook-form";
import { modifiedQuestion } from "../pages/api/modifiedQuestion";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

export default function CreateExamForm() {
	// const objectShema = {};
	// questions?.forEach((e) => {
	// 	objectShema[`q${e}`] = yup
	// 		.string()
	// 		.required(`Hãy thêm nội dung cho câu hỏi`);
	// 	objectShema[`q${e}ans0`] = yup.string().required(`Hãy thêm đáp án A`);
	// 	objectShema[`q${e}ans1`] = yup.string().required(`Hãy thêm đáp án B`);
	// 	objectShema[`q${e}ans2`] = yup.string().required(`Hãy thêm đáp án C`);
	// 	objectShema[`q${e}ans3`] = yup.string().required(`Hãy thêm đáp án D`);
	// 	objectShema[`q${e}rightAnswer`] = yup
	// 		.string()
	// 		.required(`Hãy chọn đáp án đúng`);
	// });
	// const validationSchema = yup.object().shape(objectShema);
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			questions: [
				{
					question: "",
				},
			],
		},
	});
	// {
	// resolver: yupResolver(validationSchema),
	// }
	const { fields, append, remove, move, insert } = useFieldArray({
		control, // control props comes from useForm (optional: if you are using FormContext)
		name: "questions", // unique name for your Field Array
		// keyName: "id", default to "id", you can change the key name
	});

	const router = useRouter();
	let exam = null;
	const onSubmit = (data) => {
		// exam = modifiedQuestion(data);
		console.log(data);
		router.push({
			pathname: "makeExam",
			query: {
				// type: "edit",
				exam: JSON.stringify(exam),
			},
		});
	};

	return (
		// <form onSubmit={handleSubmit(onSubmit)}>
		// 	{questions?.map((i) => (
		// 		<div key={i} className="w-auto bg-green-300 p-4">
		// 			<h4>Câu hỏi {i + 1}</h4>

		// 			<CreateQuestion
		// 				register={register}
		// 				errors={errors}
		// 				label={`q${i}`}
		// 				// mulChoice={`q${i}mul`}
		// 				labelAnswers={[`q${i}ans0`, `q${i}ans1`, `q${i}ans2`, `q${i}ans3`]}
		// 			/>
		// 		</div>
		// 	))}

		// 	<p
		// 		onClick={() => {
		// 			setQuestions([...questions, questions[questions.length - 1] + 1]);
		// 		}}
		// 	>
		// 		Thêm câu hỏi
		// 	</p>
		// 	<input type="submit" />
		// </form>
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="p-10 border rounded flex flex-col xl:flex-row items-center bg-green-50">
				<div className="w-full xl:w-2/3 flex flex-col relative mx-1">
					<input
						className="w-full mb-2 xl:mb-0 border-2 bg-transparent text-xl py-1 pl-2 focus:outline-none rounded peer"
						required
						type="text"
					/>
					<label
						className="absolute top-2 left-2 duration-200 font-medium text-gray-400 transition ease transform peer-valid:-translate-y-8 peer-focus:-translate-y-8 peer-valid:text-gray-700
                        peer-focus:text-gray-700 "
					>
						Tên Đề Thi
					</label>
				</div>

				<div className="mt-8 xl:mt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:ml-2">
					<div className="flex flex-col relative mx-2 w-ms-40">
						<input
							className="mb-1 md:mb-0 border-2 bg-transparent text-lg py-1 pl-2 focus:outline-none rounded peer"
							required
						/>
						<label className="absolute top-2 left-2 duration-200 font-medium text-gray-400 transition ease transform peer-valid:-translate-y-8 peer-focus:-translate-y-8 peer-valid:text-gray-700 peer-focus:text-gray-700">
							Môn thi
						</label>
					</div>

					<div className="mt-8 sm:mt-0 flex flex-col relative mx-2 w-ms-40">
						<input
							className="mb-1 md:mb-0 border-2 bg-transparent text-lg py-1 pl-2 focus:outline-none rounded peer"
							type="number"
							required
						/>
						<label className="absolute top-2 left-2 duration-200 font-medium text-gray-400 transition ease transform peer-focus:-translate-y-8 peer-valid:-translate-y-8 peer-valid:text-gray-700 peer-focus:text-gray-700">
							Thời gian (phút)
						</label>
					</div>

					<div className="mt-8 md:mt-0 flex flex-col relative mx-2 w-ms-40">
						<input
							className="border-2 bg-transparent text-lg py-1 pl-2 focus:outline-none rounded peer"
							required
							type="number"
						/>
						<label className="absolute top-2 left-1 duration-200 font-medium text-gray-400 transition ease transform peer-valid:-translate-y-8 peer-focus:-translate-y-8 peer-valid:text-gray-700 peer-focus:text-gray-700">
							Học kỳ
						</label>
					</div>

					<div className="mt-8 md:mt-0 flex flex-col relative mx-2 w-ms-40">
						<input
							className="border-2 bg-transparent text-lg py-1 pl-2 focus:outline-none rounded peer"
							required
						/>
						<label className="absolute top-2 left-1 duration-200 font-medium text-gray-400 transition ease transform peer-valid:-translate-y-8 peer-focus:-translate-y-8 peer-valid:text-gray-700 peer-focus:text-gray-700">
							Năm học
						</label>
					</div>
				</div>
			</div>
			<ul className="w-full flex flex-col items-center b">
				{fields?.map((item, index) => (
					<li
						className="w-1/2 flex border py-2 px-5 mt-2 rounded shadow-sm"
						key={item.id}
					>
						<div className="flex-1">
							<span className="inline-block mt-3 mb-1 rounded p-2 bg-green-300 text-xl font-semibold">
								Câu hỏi {index + 1}
							</span>

							<CreateQuestion
								register={register}
								errors={errors}
								index={index}
								label={`questions.${index}.`}
								// mulChoice={`q${i}mul`}
							/>
							<div className="text-center">
								<button
									className="m-2 p-1 bg-red-400 rounded-full"
									type="button"
									onClick={() => remove(index)}
								>
									{/* Delete icon */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										color="white"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
										/>
									</svg>
								</button>

								<button
									className="m-2 p-1 bg-indigo-400 rounded-full"
									type="button"
									onClick={() =>
										insert(index + 1, {
											question: "",
											answerA: "",
											answerB: "",
											answerC: "",
											answerD: "",
										})
									}
								>
									{/* Insert icon */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										color="white"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
										/>
									</svg>
								</button>
							</div>
						</div>
						<div className="flex flex-col justify-between">
							<button
								className="m-2 p-1 bg-blue-400 rounded-full"
								type="button"
								onClick={() => move(index, index - 1)}
							>
								{/* Move Up icon */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									color="white"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 10l7-7m0 0l7 7m-7-7v18"
									/>
								</svg>
							</button>

							<button
								className="m-2 p-1 bg-yellow-400 rounded-full"
								type="button"
								onClick={() => move(index, index + 1)}
							>
								{/* Move Down icon*/}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									color="white"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 14l-7 7m0 0l-7-7m7 7V3"
									/>
								</svg>
							</button>
						</div>
					</li>
				))}
				<div className="text-center">
					<button
						className="m-2 p-1 bg-green-400 rounded-full"
						type="button"
						onClick={() => {
							append({
								question: "",
								answerA: "",
								answerB: "",
								answerC: "",
								answerD: "",
							});
						}}
					>
						{/* Add icon */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							color="white"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 4v16m8-8H4"
							/>
						</svg>
					</button>

					<button
						className="block px-2 py-1 bg-green-400 rounded text-xl text-white font-semibold"
						type="submit"
					>
						Thêm Đề
					</button>
				</div>
			</ul>
		</form>
	);
}
