import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/userSlice";

function SignIn() {
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		if (data.username == "sv" && data.password == "sv") {
			const user = {
				id: "sv0",
				name: "Sinh viên",
				avatar: "./img/biology.jpg",
				type: "student",
			};
			const action = login(user);
			dispatch(action);
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
		<>
			<div class="w-80 max-w-xs absolute top-12 -right-20">
				<form
					onSubmit={handleSubmit(onSubmit)}
					class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
				>
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
							{...register("username", (require = true))}
							type="text"
						/>
					</div>
					<div class="mb-6">
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
					<div class="flex items-center justify-between">
						<button
							class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded focus:outline-none focus:shadow-outline relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-2 before:border-transparent before:rounded before:tranform hover:before:scale-x-110 hover:before:scale-y-125
                        before:transition before:ease-out hover:before:border-blue-500"
							type="submit"
						>
							Đăng nhập
						</button>
						<a
							class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
							href="#"
						>
							Quên mật khẩu?
						</a>
					</div>
				</form>
			</div>
		</>
	);
}

export default SignIn;
