function ViewQuestionResult({
	index,
	question,
	chosenAnswer,
	correctAnswer,
	answers,
}) {
	return (
		<div className="flex my-4">
			<div className="text-lg text-green-800 font-bold bg-green-50 border-2 border-blue-200 h-1/2 px-3 py-2 text-center">
				<h4>Câu {index + 1}</h4>
				{chosenAnswer === correctAnswer ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-10 w-10"
						fill="none"
						viewBox="0 0 18 24"
						color="green"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 13l4 4L19 7"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-10 w-10"
						fill="none"
						viewBox="0 0 18 24"
						color="red"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				)}
			</div>
			<div className="flex-1 ml-5 ">
				<div className="bg-blue-100 items-center pt-2">
					<h4 className="text-lg font-bold px-5 py-2">{question}</h4>
					<div>
						<div className="font-medium">
							<p
								className={`px-4 py-2 ${
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
								className={`px-4 py-2 ${
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
								className={`px-4 py-2 ${
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
								className={`px-4 py-2 ${
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
				<div className="mt-2 p-2 bg-blue-200 text-lg text-blue-700 font-semibold">
					Đáp án:{" "}
					<span className="text-blue-800 font-bold">{correctAnswer}</span>
				</div>
			</div>
		</div>
	);
}

export default ViewQuestionResult;
