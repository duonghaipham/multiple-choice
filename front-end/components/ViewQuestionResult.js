function ViewQuestionResult({ index, question, correctOption, option }) {
	return (
		<div className="flex my-4">
			<div className="text-lg text-green-800 font-bold bg-green-50 border-2 border-blue-200 h-1/2 px-2 sm:px-3 py-2 text-center">
				<h4>Câu {index + 1}</h4>
				{option?._id == correctOption?._id ? (
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
					<h4 className="text-lg font-bold px-5 py-2">{question?.content}</h4>
					<div>
						<div className="font-medium">
							<p
								className={`px-4 py-2 ${
									option?._id === question.options[0]?._id
										? option?._id === correctOption?._id
											? "bg-green-300"
											: "bg-red-300"
										: null
								}`}
							>
								A. {question.options[0]?.content}
							</p>
							<p
								className={`px-4 py-2 ${
									option?._id === question.options[1]?._id
										? option?._id === correctOption?._id
											? "bg-green-300"
											: "bg-red-300"
										: null
								}`}
							>
								B. {question.options[1]?.content}
							</p>
							<p
								className={`px-4 py-2 ${
									option?._id === question.options[2]?._id
										? option?._id === correctOption?._id
											? "bg-green-300"
											: "bg-red-300"
										: null
								}`}
							>
								C. {question.options[2]?.content}
							</p>
							<p
								className={`px-4 py-2 ${
									option?._id === question.options[3]?._id
										? option?._id === correctOption?._id
											? "bg-green-300"
											: "bg-red-300"
										: null
								}`}
							>
								D. {question.options[3]?.content}
							</p>
						</div>
					</div>
				</div>
				<div className="mt-2 p-2 bg-blue-200 text-lg text-blue-700 font-semibold">
					Đáp án:{" "}
					<span className="text-blue-800 font-bold">
						{correctOption?.content}
					</span>
				</div>
			</div>
		</div>
	);
}

export default ViewQuestionResult;
