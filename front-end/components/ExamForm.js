import { useRouter } from "next/dist/client/router";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { modifiedOption } from "../utils/modifiedOption";
import { initAnswers } from "../store/slices/answerSlice";
import Question from "./Question";
import axios from "axios";
import moment from "moment";
import diffTime from "../utils/diffTime";

// Create form: question-option-correctOption - 14-10-2021
// Update form: auto submit when timeout - 19-10-2021
// Update form: comfirm submit (time is continuous) - 19-10-2021
// Update form: form actually submits when user click confirm submit button - 11-01-2021

const customStyles = {
	content: {
		textAlign: "center",
		padding: "30px 60px",
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

export default function ExamForm({ timeout, questions, idExam }) {
	const router = useRouter();

	const [submit, setSubmit] = useState(false); // Xử lý hết thời gian

	const dispatch = useDispatch();

	const { register, handleSubmit, watch, setValue } = useForm();

	const setValueRadioButton = (fields) => {
		const fieldsArray = Object.entries(fields);
		fieldsArray.forEach((e) => {
			setValue(e[0], e[1]);
		});
	};

	useEffect(() => {
		const fields = JSON.parse(localStorage.getItem(idExam)); // Lấy dữ liệu "idExam" (idExam là 1 object chứa các đáp án được chọn) từ localStorage
		if (fields) setValueRadioButton(fields); // set các đáp án được chọn vào đề thì băng hàm setValue của React Hook Form
		const selectedOptions = []; // tạo mảng selectedOptions để lưu vào Redux
		// Chuyển thành 1 mảng option dạng ["A", "B",...]
		questions?.forEach((e, i) => {
			if (fields && fields[`option${i}`])
				selectedOptions.push(
					fields[`option${i}`] == e.options[0]?._id
						? "A"
						: fields[`option${i}`] == e.options[1]?._id
							? "B"
							: fields[`option${i}`] == e.options[2]?._id
								? "C"
								: fields[`option${i}`] == e.options[3]?._id
									? "D"
									: null,
				);
			else selectedOptions.push(null);
		});
		// Tạo action để dispatch vào Redux (mục đích để tạo mảng đáp án truyền qua component StateBox)
		const action =
			questions?.length != null
				? selectedOptions.some(
					(e) => e === "A" || e === "B" || e === "C" || e === "D",
				)
					? initAnswers(selectedOptions)
					: initAnswers(questions?.length)
				: initAnswers(0);
		dispatch(action);
	}, [idExam]);

	const watchAllFields = watch(); // trạng thái hiện tại của đề thi

	// Khi thay đổi trạng thái đề thi (chọn hoặc thay đổi đáp án) thì sẽ lưu lại vào localStorage
	useEffect(() => {
		localStorage.setItem(idExam, JSON.stringify(watchAllFields));
	}, [watchAllFields]);

	const onSubmit = (data) => {
		const startTime = localStorage.getItem(`startTime_${idExam}`);
		const takingTime = diffTime(startTime);
		data = modifiedOption(data, takingTime);

		const handleSubmitExam = async () => {
			try {
				//const url = `http://localhost:5000/login`;
				const res = await axios.post(
					`${process.env.NEXT_PUBLIC_API_URL}/exams/${router.query.idExam}/take`,
					data,
					{
						headers: {
							access_token: localStorage.getItem("REFRESH_TOKEN"),
						},
					},
				);
			} catch (error) {
				console.log("Failed to submit exam:", error);
			}
		};

		handleSubmitExam();
		// Submit thành công thì xóa các field trong localStorage
		localStorage.removeItem(`remainTimeSaved_${router.query.idExam}`);
		localStorage.removeItem(`currentTimeSaved_${router.query.idExam}`);
		localStorage.removeItem(`time_${router.query.idExam}`);
		localStorage.removeItem(`startTime_${router.query.idExam}`);
		localStorage.removeItem("undefined");
		localStorage.removeItem(router.query.idExam);
	};

	const checkKeyDown = (e) => {
		if (e.code === "Enter") e.preventDefault();
	};

	const buttonSubmit = useRef(); // sử dụng useRef để lấy ra button submit (tương tự document.getElement...)

	// Xử lý hết thời gian làm bài
	useEffect(() => {
		if (timeout == true) {
			buttonSubmit.current.click(); // Hết thời gian thì sẽ click vào button Submit
			setSubmit(false);
		}
	}, [timeout]);

	return (
		<div className="mt-5 flex-1">
			<form
				onSubmit={handleSubmit(onSubmit)}
				onKeyDown={(e) => checkKeyDown(e)} // Chặn user ấn Enter
			>
				{questions?.map((e, i) => (
					<Question
						key={e._id}
						index={i}
						register={register}
						label={`option${i}`}
						content={e.content}
						idContent={e._id}
						options={e.options}
					/>
				))}
				{/* button thật để submit form, user sẽ không click được, khi nào xác nhận
                nộp bài (button Modal) hoặc hết giờ làm bài thì mới gọi ref để click */}
				<button className="hidden" ref={buttonSubmit} type="submit">
					Submit
				</button>
			</form>
			{/* button submit giả cho user click để hiện Modal xác nhận nộp bài*/}
			<div className="flex justify-center mr-44">
				<button
					className="bg-blue-400 py-2 px-8 mt-4 font-bold text-gray-50 text-xl rounded-lg"
					onClick={() => setSubmit(true)}
				>
					NỘP BÀI
				</button>
			</div>
			<Modal
				isOpen={submit}
				style={customStyles}
				contentLabel="Modal"
				ariaHideApp={false}
			>
				<h2 className="font-bold text-xl text-red-500">Xác nhận nộp bài</h2>
				{/* nếu click thì gọi ref của button submit thật để submit */}

				<div className="flex justify-around mt-5">
					<button
						className="bg-blue-400 py-2 px-8 mt-4 mr-3 font-bold text-gray-50 text-lg rounded-lg"
						onClick={() => {
							buttonSubmit.current.click();
							router.push({
								pathname: "result",
								query: {
									idExam: idExam,
								},
							});
						}}
					>
						Nộp bài
					</button>
					<button
						className="bg-yellow-400 py-2 px-8 mt-4 ml-3 font-bold text-gray-50 text-lg rounded-lg"
						onClick={() => setSubmit(false)}
					>
						Làm bài tiếp
					</button>
				</div>
			</Modal>
		</div>
	);
}
