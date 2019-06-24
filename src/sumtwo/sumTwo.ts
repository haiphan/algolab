// O(N) time, O(1) space
// start from beginning and end point
// if sum smaller, inc start point
// if sum bigger, dec end point
export const sumTwo = (arr, value) => {
	let start = 0;
	let end = arr.length - 1;
	let sum;
	while (start < end) {
		sum = arr[start] + arr[end];
		if (sum === value) {
			return true;
		}
		end -= sum > value ? 1 : 0;
		start += sum < value ? 1 : 0;
	}
	return false;
};

// if arrary not sorted

export const sumTwoUnsorted = (arr, value) => {
	let searchValues = new Set();
	let res = false;
	arr.forEach((num) => {
		if (res) {
			return;
		}
		if (searchValues.has(num)) {
			res = true;
			return;
		}
		searchValues.add(value - num);
	});
	return res;
};