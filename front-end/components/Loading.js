function Loading() {
	return (
		<div>
			<div className="p-4 w-full border-b-2">
				<div className="animate-pulse flex space-x-4">
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
					<div className="flex-1 space-y-6 py-1">
						<div className="h-2 bg-gray-400 rounded"></div>
						<div className="space-y-3">
							<div className="grid grid-cols-4 gap-4">
								<div className="h-2 bg-gray-400 rounded col-span-1"></div>
								<div className="h-2 bg-gray-400 rounded col-span-1"></div>
							</div>
							<div className="grid grid-cols-4 gap-4">
								<div className="h-2 bg-gray-400 rounded col-span-1"></div>
								<div className="h-2 bg-gray-400 rounded col-span-1"></div>
							</div>
							<div className="grid grid-cols-4 gap-4">
								<div className="h-2 bg-gray-400 rounded col-span-1"></div>
								<div className="h-2 bg-gray-400 rounded col-span-1"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Loading;
