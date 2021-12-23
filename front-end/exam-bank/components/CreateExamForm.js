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
			questions: [],
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
			<div></div>
			<ul>
				{fields?.map((item, index) => (
					<li key={item.id}>
						<div className="w-auto bg-green-300 p-4">
							<h4>Câu hỏi {index + 1}</h4>
						</div>
						<CreateQuestion
							register={register}
							errors={errors}
							index={index}
							label={`questions.${index}.`}
							// mulChoice={`q${i}mul`}
						/>
						<button type="button" onClick={() => remove(index)}>
							Delete
						</button>
						<button type="button" onClick={() => move(index, index - 1)}>
							move up
						</button>
						<button type="button" onClick={() => move(index, index + 1)}>
							move down
						</button>
						<button
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
							insert
						</button>
					</li>
				))}
			</ul>
			<button
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
				append
			</button>

			<input type="submit" />
		</form>
	);
}
