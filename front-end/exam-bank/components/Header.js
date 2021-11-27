import router from "next/router";

function Header() {
	return (
		<header className="bg-gray-50 shadow-sm flex justify-between items-center px-10 py-3 sticky top-0 left-0 z-10">
			<div
				className="flex flex-auto items-center cursor-pointer"
				onClick={() => router.push("/")}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path d="M12 14l9-5-9-5-9 5 9 5z" />
					<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
					/>
				</svg>
				<h1 className="text-2xl ml-1">DKG</h1>
			</div>
			<div className="flex ">
				<div className="flex items-center mr-5">
					<h3 className="mr-5 font-thin text-gray-400 w-20 text-center">
						Trang chủ
					</h3>
					<h3 className="mr-5 font-thin text-gray-400 w-20 text-center">
						Đề thi
					</h3>
					<h3 className="mr-5 font-thin text-gray-400 w-20 text-center">
						Giới thiệu
					</h3>
					<h3 className="mr-5 font-thin text-gray-400 w-20 text-center">
						Liên lạc
					</h3>
				</div>
				<div className="flex">
					<h3 className="mr-5 bg-yellow-500 px-2 py-1 text-gray-50 font-bold">
						Đăng nhập
					</h3>
					<h3 className="mr-5 bg-yellow-500 px-2 py-1 text-gray-50 font-bold">
						Đăng ký
					</h3>
				</div>
			</div>
		</header>
	);
}

export default Header;
