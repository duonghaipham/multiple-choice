function AnswerBox({ question, answer }) {
	return (
		<div
			className={`${
				answer ? "bg-green-400" : "bg-yellow-300"
			} relative flex justify-center w-8 h-8 rounded-lg transition delay-50 ease-in`}
		>
			<span className="block text-sm text-black font-bold bg-white shadow-sm rounded-full w-5 h-5 leading-5 text-center absolute -top-2 -left-2 ">
				{question}
			</span>
			<span className="text-xl font-bold text-white pt-0.5">{answer}</span>
		</div>
	);
}

export default AnswerBox;
