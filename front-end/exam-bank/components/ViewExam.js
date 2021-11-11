import ViewQuestion from "./ViewQuestion";

function ViewExam() {
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
	];

	return (
		<div>
			{arr.map((e, i) => (
				<ViewQuestion
					key={i}
					index={i}
					question={e.question}
					chosenAnswer={e.chosenAnswer}
					correctAnswer={e.correctAnswer}
					answers={e.answers}
				/>
			))}
		</div>
	);
}

export default ViewExam;
