import router from "next/router";

function ExamItem({ id, name, minuteLimit, creator, openDate, isDone }) {
	return (
		<div className="py-2">
			<div className="flex jutify-between items-center">
				<div className="flex flex-1 jutify-between items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
						/>
					</svg>

					<h3
						className={`text-md md:text-xl xl:text-2xl ${isDone ? "text-green-500" : "text-yellow-500"
							} font-semibold ml-2 cursor-pointer`}
					>
						{name}
					</h3>
				</div>
			</div>
			<div className="ml-8 mt-2">
				<h3 className="text-sm sm:text-md xl:text-lg text-gray-600 font-semibold">
					Thời gian:
					<span className="text-yellow-500 ml-2">{minuteLimit}</span>
				</h3>
				<h4 className="text-sm sm:text-md xl:text-lg text-gray-600 font-semibold">
					Người đăng:
					<span className="text-yellow-500 ml-2">{creator}</span>
				</h4>
				<h4 className="text-sm sm:text-md xl:text-lg text-gray-600 font-semibold">
					Ngày đăng:
					<span className="text-yellow-500 ml-2">{openDate}</span>
				</h4>
			</div>
		</div>
	);
}

export default ExamItem;
