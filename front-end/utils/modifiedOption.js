// Done form: question-answer-rightAnswer - 14-10-2021

const modifiedOption = (data, takingTime) => {
	const keys = Object.keys(data).sort();

	let arr = [];
	const n = keys.length / 2;
	for (let i = 0; i < n; i++) {
		const obj = {};
		obj["option"] = data[keys[i]];
		obj["question"] = data[keys[n + i]];
		arr.push(obj);
	}
	return {
		secondTaken: takingTime,
		options: arr,
	};
};

export { modifiedOption };
