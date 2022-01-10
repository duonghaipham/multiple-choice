import { useForm } from "react-hook-form";
import axios from "axios";
import { useRef, useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Cookies from "universal-cookie";
import { login } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";

function SignUp() {
	const dispatch = useDispatch();
	const [error, setError] = useState();

	const validationSchema = Yup.object().shape({
		name: Yup.string().required("Hãy nhập Họ tên"),
		role: Yup.string().required(),
		email: Yup.string().required("Hãy nhập Email"),
		password: Yup.string()
			.required("Hãy nhập mật khẩu")
			.min(6, "Mật khẩu phải hơn 6 kí tự"),
		confirmPassword: Yup.string()
			.required("Hãy nhập mật khẩu xác nhận")
			.oneOf([Yup.ref("password")], "Mật khẩu không khớp"),
	});
	const formOptions = { resolver: yupResolver(validationSchema) };
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm(formOptions);

	const onSubmit = (data) => {
		console.log("data register", data);
		const handleRegister = async () => {
			try {
				//const url = `http://localhost:5000/login`;
				const res = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
                    data
                );

				if (res.data.message === "Success") {
					const handleLogin = async () => {
						try {
							const url = `${process.env.NEXT_PUBLIC_API_URL}/login`;
							const accountLogin = {
								email: data.email,
								password: data.password,
							};
							const res = await axios.post(url, accountLogin);
							//const res = await authApi.login(data);

							if (res.data.message === "Success") {
								localStorage.setItem("REFRESH_TOKEN", res.data.refreshToken);
								const cookies = new Cookies();

								cookies.set("access_token", res.data.refreshToken, {
									path: "/",
								});

								const user = res.data.user;
								const action = login(user);
								dispatch(action);
							} else {
							}
						} catch (error) {
							console.log("Failed to login", error);
						}
					};
					handleLogin();
				} else {
				}
			} catch (error) {
				if (error.toString().includes("401")) setError("Tài khoản đã tồn tại");
				console.log("Failed to fetch exam:", error);
			}
		};
		handleRegister();
	};

	return (
		<div>
			<div className="w-screen -right-5 sm:w-80 sm:max-w-xs absolute top-12 sm:right-0">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="bg-white shadow-md rounded px-6 pt-3 pb-4 mb-2"
				>
					<div className="mb-2">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="name"
						>
							Họ tên
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							name="name"
							{...register("name", { required: true })}
							type="text"
						/>
						<ErrorMessage
							errors={errors}
							name="name"
							render={() => (
								<span className="text-sm bg-red-200 py-1 px-2 rounded text-red-900 font-semibold">
									{errors.name?.message}
								</span>
							)}
						/>
					</div>
					<label className="block text-gray-700 text-sm font-bold mb-2 mr-2">
						Loại
					</label>
					<div className="mb-2 text-center">
						<div className="w-full mb-2 flex items-center justify-around">
							<div className="flex items-center">
								<label
									className="block text-gray-700 text-sm font-semibold  mr-2"
									htmlFor="role"
								>
									Học sinh
								</label>
								<input
									name="role"
									value="student"
									{...register("role", { required: true })}
									type="radio"
								/>
							</div>
							<div className="flex items-center">
								<label
									className="block text-gray-700 text-sm font-semibold  mr-2"
									htmlFor="role"
								>
									Giáo viên
								</label>
								<input
									name="role"
									value="teacher"
									{...register("role", { required: true })}
									type="radio"
								/>
							</div>
						</div>
						<ErrorMessage
							errors={errors}
							name="role"
							render={() => (
								<span className="text-sm bg-red-200 py-1 px-2 rounded text-red-900 font-semibold">
									Hãy chọn Loại
								</span>
							)}
						/>
					</div>

					<div className="mb-2">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							name="email"
							{...register("email", { required: true })}
							type="text"
						/>
						<ErrorMessage
							errors={errors}
							name="email"
							render={() => (
								<span className="text-sm bg-red-200 py-1 px-2 rounded text-red-900 font-semibold">
									{errors.email?.message}
								</span>
							)}
						/>
					</div>
					<div className="mb-2">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="password"
						>
							Mật khẩu
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
							name="password"
							type="password"
							{...register("password", { required: true })}
						/>
						<ErrorMessage
							errors={errors}
							name="password"
							render={() => (
								<span className="text-sm bg-red-200 py-1 px-2 rounded text-red-900 font-semibold">
									{errors.password?.message}
								</span>
							)}
						/>
					</div>
					<div className="mb-2">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="confirmPassword"
						>
							Xác nhận mật khẩu
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
							name="confirmPassword"
							type="password"
							{...register("confirmPassword", { required: true })}
						/>
						<ErrorMessage
							errors={errors}
							name="confirmPassword"
							render={() => (
								<span className="text-sm bg-red-200 mb-3 py-1 px-2 rounded text-red-900 font-semibold">
									{errors.confirmPassword?.message}
								</span>
							)}
						/>
					</div>
					{error && (
						<span className="inline-block w-full text-center text-sm bg-red-200 mb-3 py-1 px-2 rounded text-red-900 font-semibold">
							{error}
						</span>
					)}
					<div className="flex items-center justify-center">
						<button
							className="bg-yellow-500 text-white font-bold px-2 py-1  rounded focus:outline-none focus:shadow-outline relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded before:border-2 before:border-transparent before:tranform hover:before:scale-x-110 hover:before:scale-y-125
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
