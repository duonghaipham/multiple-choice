import AnswerResultBox from "./AnswerResultBox";
function AnswersResultBox({ options }) {
	console.log(options);
	return (
		<div className="grid grid-flow-row grid-cols-5 gap-3 p-2 mb-3 px-5">
			{options?.map((value, index) => (
				<AnswerResultBox
					key={index}
					question={index + 1}
					option={value.option}
					correctOption={value.question.correctOption}
					correctOptionChar={
						value.question.correctOption == value.question.options[0]
							? "A"
							: value.question.correctOption == value.question.options[1]
							? "B"
							: value.question.correctOption == value.question.options[2]
							? "C"
							: "D"
					}
				/>
			))}
		</div>
	);
}

export default AnswersResultBox;
