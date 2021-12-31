import { useForm } from "react-hook-form";
import axios from "axios";

function SignUp() {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		const handleRegister = async () => {
			try {
				//const url = `http://localhost:5000/login`;
				const res = await axios.post(
					"http://localhost:5000/users/register",
					data,
					{
						headers: {
							"Content-Type": "application/json",
						},
					},
				);

				console.log(res);
				if (res.message === "Success") {
					//dispatch(login(user));
				} else {
				}
			} catch (error) {
				console.log("Failed to fetch exam:", error);
			}
		};
		handleRegister();

		if (data.username == "sv" && data.password == "sv") {
			const user = {
				id: "sv0",
				name: "Sinh viên",
				avatar: "./img/biology.jpg",
				type: "student",
			};
		}
		if (data.username == "gv" && data.password == "gv") {
			const user = {
				id: "gv0",
				name: "Giáo viên",
				avatar: "./img/math.jpg",
				type: "teacher",
			};
			const action = login(user);
			dispatch(action);
		}
	};

	return (
		<div>
			<div class="w-80 max-w-xs absolute top-12 right-0">
				<form
					onSubmit={handleSubmit(onSubmit)}
					class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
				>
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
							{...register("name", (require = true))}
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
							for="email"
						>
							Email
						</label>
						<input
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							{...register("email", (require = true))}
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
							{...register("password", (require = true))}
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
							{...register("comfirmPassword", (require = true))}
							type="password"
						/>
					</div>
					<div class="flex items-center justify-center">
						<button
							class="bg-yellow-500 text-white font-bold px-2 py-1  rounded focus:outline-none focus:shadow-outline relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded before:border-2 before:border-transparent before:tranform hover:before:scale-x-110 hover:before:scale-y-125
                            before:transition before:ease-out hover:before:border-yellow-500"
							type="submit"
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
