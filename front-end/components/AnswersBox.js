import { useSelector } from "react-redux";
import AnswerBox from "./AnswerBox";
function AnswersBox() {
	const answers = useSelector((state) => state.answers);
	return (
		<div className="grid grid-flow-row grid-cols-5 gap-3 p-2">
			{answers?.map((value, index) => (
				<AnswerBox key={index} question={index + 1} answer={value} />
			))}
		</div>
	);
}

export default AnswersBox;
