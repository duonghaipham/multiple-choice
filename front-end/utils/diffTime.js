var moment = require("moment");

const diffTime = (startTime) => {
	const now = moment().format("DD/MM/YYYY HH:mm:ss");
	const then = moment().format(startTime);
	const diff = moment
		.utc(
			moment(now, "DD/MM/YYYY HH:mm:ss").diff(
				moment(then, "DD/MM/YYYY HH:mm:ss"),
			),
		)
		.format("HH:mm:ss");
	const objDiff = {};
	const arrDiff = diff.split(":");
	objDiff["hours"] = parseInt(arrDiff[0]);
	objDiff["minutes"] = parseInt(arrDiff[1]);
	objDiff["seconds"] = parseInt(arrDiff[2]);

	const takingTime =
		objDiff?.hours * 3600 + objDiff?.minutes * 60 + objDiff?.seconds;
	return takingTime;
};

export default diffTime;
