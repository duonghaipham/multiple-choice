import router from "next/router";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Header() {
	const [signIn, setSignIn] = useState(false);
	const [signUp, setSignUp] = useState(false);

	return (
		<header className="bg-gray-50 shadow-sm flex justify-between items-center px-5 py-3 sticky top-0 left-0 z-10 sm:px-10">
			<div>
				<div
					className="flex cursor-pointer items-center"
					onClick={() => router.push("/")}
				>
					{/* Logo icon */}
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
					<h1 className="text-sm lg:text-2xl ml-1">EXAM BANK</h1>
				</div>
			</div>
			<div className="flex">
				<div className="hidden sm:flex sm:items-center sm:mr-5">
					<h3
						className="mr-5 font-semibold text-gray-600 w-20 text-center cursor-pointer"
						onClick={() => router.push("/")}
					>
						Trang chủ
					</h3>
					<h3 className="mr-5 font-semibold text-gray-600 w-20 text-center cursor-pointer">
						Đề thi
					</h3>
					<h3 className="hidden md:block mr-5 font-semibold text-gray-600 w-20 text-center cursor-pointer">
						Giới thiệu
					</h3>
					<h3 className="hidden md:block mr-5 font-semibold text-gray-600 w-20 text-center cursor-pointer">
						Liên lạc
					</h3>
					<h3
						className="hidden md:block mr-5 font-semibold text-gray-600 w-20 text-center cursor-pointer"
						onClick={() => router.push("/createExam")}
					>
						Thêm đề
					</h3>
				</div>
				<div className="flex">
					<div className="relative">
						<button
							className="bg-blue-500 text-white font-bold rounded relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-2 before:border-transparent before:rounded before:tranform hover:before:scale-x-110 hover:before:scale-y-125
                        before:transition before:ease-out hover:before:border-blue-500 text-sm mr-1 lg:text-lg sm:mr-5 px-2 py-1"
							onClick={() => {
								setSignIn(!signIn);
								signUp ? setSignUp(false) : null;
							}}
						>
							Đăng nhập
						</button>
						{signIn && <SignIn />}
					</div>
					<div className="relative">
						<button
							className="bg-yellow-500 text-white font-bold rounded relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded before:border-2 before:border-transparent before:tranform hover:before:scale-x-110 hover:before:scale-y-125
                        before:transition before:ease-out hover:before:border-yellow-500 text-sm lg:text-lg sm:mr-5 px-2 py-1"
							onClick={() => {
								setSignUp(!signUp);
								signIn ? setSignIn(false) : null;
							}}
						>
							Đăng ký
						</button>
						{signUp && <SignUp />}
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
