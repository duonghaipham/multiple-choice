function ViewQuestion({
	index,
	question,
	chosenAnswer,
	correctAnswer,
	answers,
}) {
	return (
		<div className="pb-2">
			<h2 className="pl-20">
				Cau {index + 1}: {question}
			</h2>
			<div className="flex items-center">
				<div className="w-20 text-center ">{correctAnswer}</div>
				<div>
					<div className="w-80">
						<p
							className={`p-1 w-full ${
								chosenAnswer === "A"
									? chosenAnswer === correctAnswer
										? "bg-green-300"
										: "bg-red-300"
									: null
							} `}
						>
							A. {answers[0]}
						</p>
						<p
							className={`p-1 w-full ${
								chosenAnswer === "B"
									? chosenAnswer === correctAnswer
										? "bg-green-300"
										: "bg-red-300"
									: null
							} `}
						>
							B. {answers[1]}
						</p>
						<p
							className={`p-1 w-full ${
								chosenAnswer === "C"
									? chosenAnswer === correctAnswer
										? "bg-green-300"
										: "bg-red-300"
									: null
							} `}
						>
							C. {answers[2]}
						</p>
						<p
							className={`p-1 w-full ${
								chosenAnswer === "D"
									? chosenAnswer === correctAnswer
										? "bg-green-300"
										: "bg-red-300"
									: null
							} `}
						>
							D. {answers[3]}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ViewQuestion;
