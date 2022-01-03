import AnswerResultBox from "./AnswerResultBox";
function AnswersResultBox({ options }) {
	return (
		<div className="grid grid-flow-row grid-cols-5 gap-3 p-2 mb-3 px-5">
			{options?.map((value, index) => (
				<AnswerResultBox
					key={index}
					question={index + 1}
					option={value.option}
					correctOption={value.question.correctOption}
					correctOptionChar={
						value.option?._id == value.question.options[0]?._id
							? "A"
							: value.option?._id == value.question.options[1]?._id
							? "B"
							: value.option?._id == value.question.options[2]?._id
							? "C"
							: "D"
					}
				/>
			))}
		</div>
	);
}

export default AnswersResultBox;
