import AnswerResultBox from "./AnswerResultBox";
function AnswersResultBox() {
	const arr = [
		{
			question: "What is your name?",
			chosenAnswer: "B",
			correctAnswer: "A",
			answers: ["Nguyễn Văn A", "Phạm Thị B", "Lê Văn C", "Trần Thị D "],
		},
		{
			question: "How old are you?",
			chosenAnswer: "C",
			correctAnswer: "C",
			answers: ["12", "18", "20", "22"],
		},
		{
			question: "Where are you live?",
			chosenAnswer: "C",
			correctAnswer: "B",
			answers: ["TP. Hồ Chí Minh", "Đồng Nai", "Bình Dương", "Khánh Hoà"],
		},
		{
			question: "Which major are you studying? ",
			chosenAnswer: "D",
			correctAnswer: "D",
			answers: [
				"Computer Sience",
				"Information Systems",
				"Information Technology",
				"Software Engineering",
			],
		},
		{
			question: "What is your name?",
			chosenAnswer: "B",
			correctAnswer: "A",
			answers: ["Nguyễn Văn A", "Phạm Thị B", "Lê Văn C", "Trần Thị D "],
		},
		{
			question: "How old are you?",
			chosenAnswer: "C",
			correctAnswer: "C",
			answers: ["12", "18", "20", "22"],
		},
		{
			question: "Where are you live?",
			chosenAnswer: "C",
			correctAnswer: "B",
			answers: ["TP. Hồ Chí Minh", "Đồng Nai", "Bình Dương", "Khánh Hoà"],
		},
		{
			question: "Which major are you studying? ",
			chosenAnswer: "D",
			correctAnswer: "D",
			answers: [
				"Computer Sience",
				"Information Systems",
				"Information Technology",
				"Software Engineering",
			],
		},
	];

	return (
		<div className="grid grid-flow-row grid-cols-5 gap-3 p-2 mb-3 px-5">
			{arr?.map((value, index) => (
				<AnswerResultBox
					key={index}
					question={index + 1}
					answer={value.chosenAnswer}
					correctAnswer={value.correctAnswer}
				/>
			))}
		</div>
	);
}

export default AnswersResultBox;
