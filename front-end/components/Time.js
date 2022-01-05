// Done form: auto submit when timeout - 19-10-2021
// Done form: auto submit when timeout - UI - 31-10-2021
// Done Countdown Timer: save time in localStorage when
//                       student leave the TakeExam page

import moment from "moment";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Time({ hours, minutes, seconds }) {
	const router = useRouter();

	const remainTimeSaved = {
		hours: hours,
		minutes: minutes,
		seconds: seconds,
	};

	const currentTimeSaved = moment().format("DD/MM/YYYY HH:mm:ss");

	// Hàm lưu thời gian
	const saveTime = () => {
		localStorage.setItem(
			`remainTimeSaved_${router.query.idExam}`,
			JSON.stringify(remainTimeSaved),
		);
		localStorage.setItem(
			`currentTimeSaved_${router.query.idExam}`,
			JSON.stringify(currentTimeSaved),
		);
	};

	// Lưu thời gian lại khi user refresh (F5), tắt tab, thay đổi route
	useEffect(() => {
		window.addEventListener("beforeunload", saveTime);
		return () => {
			window.removeEventListener("beforeunload", saveTime);
		};
	});

	// Lưu thời gian lại khi user ấn back hoặc forward
	useEffect(() => {
		window.onpopstate = saveTime;
	});

	return (
		<div className="py-10 w-52 flex justify-center">
			<div className="bg-gray-100 h-16 w-40 border-2 border-green-400 flex flex-col items-center rounded-xl justify-center">
				<p
					className={`text-[35px] font-bold text-green-400 ${
						hours === 0 &&
						minutes >= 1 &&
						minutes <= 5 &&
						`text-yellow-500 text-[45px]`
					} ${hours === 0 && minutes === 0 && `text-red-500 text-[55px]`}`}
				>
					{/* Format Time hh:mm:ss */}
					{hours === 0 ? null : hours < 10 ? "0" + hours + ":" : hours + ":"}
					{minutes === 0
						? hours > 0
							? "00:"
							: null
						: minutes < 10
						? "0" + minutes + ":"
						: minutes + ":"}
					{seconds < 10 ? "0" + seconds : seconds}
				</p>
			</div>
		</div>
	);
}

export default Time;
