function SignUp() {
	return (
		<div>
			<div class="w-80 max-w-xs absolute top-10 right-0">
				<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
					<div class="mb-4">
						<label
							class="block text-gray-700 text-sm font-bold mb-2"
							for="name"
						>
							Họ tên
						</label>
						<input
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="name"
							type="text"
						/>
					</div>
					<label
						class="block text-gray-700 text-sm font-bold mb-2 mr-2"
						for="typeOfUser"
					>
						Loại
					</label>
					<div class="mb-4 flex items-center justify-around">
						<div className="flex items-center">
							<label
								class="block text-gray-700 text-sm font-semibold  mr-2"
								for="typeOfUser"
							>
								Học sinh
							</label>
							<input name="typeOfUser" id="student" type="radio" />
						</div>
						<div className="flex items-center">
							<label
								class="block text-gray-700 text-sm font-semibold  mr-2"
								for="typeOfUser"
							>
								Giáo viên
							</label>
							<input name="typeOfUser" id="teacher" type="radio" />
						</div>
					</div>
					<div class="mb-4">
						<label
							class="block text-gray-700 text-sm font-bold mb-2"
							for="username"
						>
							Tài khoản
						</label>
						<input
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="username"
							type="text"
						/>
					</div>
					<div class="mb-4">
						<label
							class="block text-gray-700 text-sm font-bold mb-2"
							for="password"
						>
							Mật khẩu
						</label>
						<input
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
						/>
					</div>
					<div class="mb-6">
						<label
							class="block text-gray-700 text-sm font-bold mb-2"
							for="comfirmPassword"
						>
							Xác nhận mật khẩu
						</label>
						<input
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="comfirmPassword"
							type="password"
						/>
					</div>
					<div class="flex items-center justify-center">
						<button
							class="bg-yellow-500 text-white font-bold px-2 py-1  rounded focus:outline-none focus:shadow-outline relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded before:border-2 before:border-transparent before:tranform hover:before:scale-x-110 hover:before:scale-y-125
                            before:transition before:ease-out hover:before:border-yellow-500"
							type="button"
						>
							Đăng ký
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SignUp;
