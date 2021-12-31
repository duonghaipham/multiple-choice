// Done form: question-answer-rightAnswer - 14-10-2021

const modifiedQuestion = (data) => {
	const arr = data.questions;

	arr.forEach((e, i) => {
		const ansArray = [];

		ansArray.push(e["optionA"]);
		ansArray.push(e["optionB"]);
		ansArray.push(e["optionC"]);
		ansArray.push(e["optionD"]);

		delete e["optionA"];
		delete e["optionB"];
		delete e["optionC"];
		delete e["optionD"];

		e["options"] = ansArray;
	});

	//const keys = Object.keys(data.questions).sort();
	// let arr = [];

	// for (let i = 0; i < keys.length / 6; i++) {
	// 	let ar = [];
	// 	let obj = {};
	// 	keys.slice(6 * i, 6 * (i + 1)).forEach((key, index) => {
	// 		if (index === 0) {
	// 			obj["question"] = data[key];
	// 		} else if (index >= 1 && index <= 4) {
	// 			ar.push(data[key]);
	// 		} else {
	// 			obj["correctAnswer"] = data[key];
	// 		}
	// 	});
	// 	obj["answers"] = ar;
	// 	arr.push(obj);
	// }
	// return arr;
};

export { modifiedQuestion };
