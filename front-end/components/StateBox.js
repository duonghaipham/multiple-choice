import moment from "moment";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import AnswersBox from "./AnswersBox";
import Time from "./Time";

// Done form: question-answer-rightAnswer - 14-10-2021
// Done form: auto submit when timeout - 19-10-2021
// Done form: auto submit when timeout - UI - 31-10-2021
// Done Countdown Timer: save time in localStorage when
//                       student leave the TakeExam page

function StateBox({ timeout, setTimeout }) {
	const [time, setTime] = useState(72);

	useEffect(() => {
		const remainTimeLoaded = JSON.parse(
			localStorage.getItem("remainTimeSaved"),
		);

		const currentTimeLoaded = JSON.parse(
			localStorage.getItem("currentTimeSaved"),
		);

		// Chỉ tính thời gian còn lại khi bài thi đang được làm
		if (remainTimeLoaded != null) {
			const now = moment().format("DD/MM/YYYY HH:mm:ss");
			const then = moment().format(currentTimeLoaded);
			const diff = moment
				.utc(
					moment(now, "DD/MM/YYYY HH:mm:ss").diff(
						moment(then, "DD/MM/YYYY HH:mm:ss"),
					),
				)
				.format("HH:mm:ss");

			// Tính thời gian làm bài còn lại
			const objDiff = {};
			const arrDiff = diff.split(":");
			objDiff["hours"] = parseInt(arrDiff[0]);
			objDiff["minutes"] = parseInt(arrDiff[1]);
			objDiff["seconds"] = parseInt(arrDiff[2]);

			const remainHours = remainTimeLoaded?.hours - objDiff?.hours;
			const remainMinutes = remainTimeLoaded?.minutes - objDiff?.minutes;
			const remainSeconds = remainTimeLoaded?.seconds - objDiff?.seconds;

			setTime(remainHours * 3600 + remainMinutes * 60 + remainSeconds);
		}
	}, []);

	const renderer = ({ hours, minutes, seconds, completed }) => {
		if (completed) {
			// Render a completed state
			return (
				<div className="py-10 w-52 flex justify-center">
					<div className="h-16 w-40 border-2 border-red-500 flex flex-col items-center rounded-xl justify-center">
						<h1 className="text-red-600 font-bold text-3xl">HẾT GIỜ</h1>
					</div>
				</div>
			);
		} else {
			// Render a countdown
			return <Time hours={hours} minutes={minutes} seconds={seconds} />;
		}
	};

	return (
		<div className="flex flex-col items-center justify-start md:fixed top-100 right-5 bg-indigo-300 bg-opacity-40 rounded-lg p-2 m-10">
			<AnswersBox />
			<Countdown
				date={timeout ? 0 : Date.now() + time * 1000}
				renderer={renderer}
				onComplete={() => setTimeout(true)}
			/>
		</div>
	);
}

export default StateBox;
