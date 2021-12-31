// Done form: question-answer-rightAnswer - 14-10-2021

const modifiedAnswer = (data) => {
	const keys = Object.keys(data).sort();

	let arr = [];

	for (let i = 0; i < keys.length / 6; i++) {
		keys.slice(6 * i, 6 * (i + 1)).forEach((key) => {
			arr.push(data[key]);
		});
	}
	return arr;
};

export { modifiedAnswer };
