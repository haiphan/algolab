// O(N) time, O(1) space
// start from beginning and end point
// if sum smaller, inc start point
// if sum bigger, dec end point
const sumTwo = (arr, value) => {
	let start = 0;
	let end = arr.length - 1;
	while (start < end) {
		end -= sum > val ? 1 : 0;
		start += sum < val ? 1 : 0;
		if (sum === val) {
			return true;
		}
	}
	return false;
};

// if arrary not sorted

const sumTwoUnsorted = (arr, value) => {
	let searchValues = new Set();
	arr.forEach(num => {
		if (searchValues.has(num)) {
			return true;
		}
		searchValues.add(value - num);
	});
	return false;
};