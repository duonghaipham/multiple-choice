// Done form: question-answer-rightAnswer - 14-10-2021
// Done Redux: add redux in project to show answer in QuestionsBox - 11-01-2021

import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { chooseAnswer } from "../store/slices/answerSlice";

function Question({ index, register, question, label, type, answers }) {
	const dispatch = useDispatch();

	const handleChooseAnswer = (e) => {
		const answer = {
			index: index,
			value: e.target.value,
		};

		const action = chooseAnswer(answer);
		dispatch(action);
	};

	return (
		<div>
			<h4 className="text-lg font-bold">
				Câu {index + 1}: <p className="pl-3 inline-block">{question}</p>
			</h4>
			<label className="flex items-center relative">
				<input
					className="mr-3 h-6 w-6 "
					{...register(label)}
					// type={checkBox ? 'checkbox' : 'radio'}
					type="radio"
					value="A"
					onClick={handleChooseAnswer}
				/>
				<span className="text-lg pr-2 font-bold">A.</span>
				<p className="text-lg px-2 font-bold">{answers[0]}</p>
			</label>
			<label className="flex items-center relative">
				<input
					className="mr-3 h-6 w-6 "
					{...register(label)}
					// type={checkBox ? 'checkbox' : 'radio'}
					type="radio"
					value="B"
					onClick={handleChooseAnswer}
				/>
				<span className="text-lg pr-2 font-bold">B.</span>
				<p className="text-lg px-2 font-bold">{answers[1]}</p>
			</label>
			<label className="flex items-center relative">
				<input
					className="mr-3 h-6 w-6 "
					{...register(label)}
					// type={checkBox ? 'checkbox' : 'radio'}
					type="radio"
					value="C"
					onClick={handleChooseAnswer}
				/>
				<span className="text-lg pr-2 font-bold">C.</span>
				<p className="text-lg px-2 font-bold">{answers[2]}</p>
			</label>
			<label className="flex items-center relative">
				<input
					className="mr-3 h-6 w-6 "
					{...register(label)}
					// type={checkBox ? 'checkbox' : 'radio'}
					type="radio"
					value="D"
					onClick={handleChooseAnswer}
				/>
				<span className="text-lg pr-2 font-bold">D.</span>
				<p className="text-lg px-2 font-bold">{answers[3]}</p>
			</label>
		</div>
	);
}

export default Question;
