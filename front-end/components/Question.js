// Done form: question-Option-rightOption - 14-10-2021
// Done Redux: add redux in project to show Option in QuestionsBox - 11-01-2021

import { useDispatch } from "react-redux";
import { chooseAnswer } from "../store/slices/answerSlice";

function Question({ index, register, label, content, idContent, options }) {
	const dispatch = useDispatch();

	const handleChooseOption = (e) => {
		const option = {
			index: index,
			value:
				e.target.value == options[0]._id
					? "A"
					: e.target.value == options[1]._id
					? "B"
					: e.target.value == options[2]._id
					? "C"
					: "D",
		};

		const action = chooseAnswer(option);
		dispatch(action);
	};

	return (
		<div className="flex my-4">
			<h4 className="flex justify-center items-center text-lg text-green-800 font-bold bg-green-100 h-14 w-16 border-2 border-blue-200">
				Câu {index + 1}
			</h4>

			<div className=" flex-1 ml-1 bg-blue-200 bg-opacity-30 p-3 ">
				<h4 className="text-xl mb-2 font-bold py-2 px-9 border-b-2">
					{content}
				</h4>
				<input
					className="hidden"
					type="text"
					{...register(`question${index}`)}
					value={idContent}
				/>
				<label className="flex items-center relative py-1">
					<input
						className="mr-3 h-6 w-6 "
						{...register(label)}
						// type={checkBox ? 'checkbox' : 'radio'}
						type="radio"
						value={options[0]?._id}
						onClick={handleChooseOption}
					/>
					<span className="text-lg pr-2 font-bold">A.</span>
					<p className="text-lg px-2 font-medium">{options[0]?.content}</p>
				</label>
				<label className="flex items-center relative py-1">
					<input
						className="mr-3 h-6 w-6 "
						{...register(label)}
						// type={checkBox ? 'checkbox' : 'radio'}
						type="radio"
						value={options[1]?._id}
						onClick={handleChooseOption}
					/>
					<span className="text-lg pr-2 font-bold">B.</span>
					<p className="text-lg px-2 font-medium">{options[1]?.content}</p>
				</label>
				<label className="flex items-center relative py-1">
					<input
						className="mr-3 h-6 w-6 "
						{...register(label)}
						// type={checkBox ? 'checkbox' : 'radio'}
						type="radio"
						value={options[2]?._id}
						onClick={handleChooseOption}
					/>
					<span className="text-lg pr-2 font-bold">C.</span>
					<p className="text-lg px-2 font-medium">{options[2]?.content}</p>
				</label>
				<label className="flex items-center relative py-1">
					<input
						className="mr-3 h-6 w-6 "
						{...register(label)}
						// type={checkBox ? 'checkbox' : 'radio'}
						type="radio"
						value={options[3]?._id}
						onClick={handleChooseOption}
					/>
					<span className="text-lg pr-2 font-bold">D.</span>
					<p className="text-lg px-2 font-medium">{options[3]?.content}</p>
				</label>
			</div>
		</div>
	);
}

export default Question;
