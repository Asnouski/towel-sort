
// You should implement your task here.

module.exports = function towelSort(matrix) {
	let array = [];
	let recursia = (arr) => {
		if (!arr || arr.length === 0) return [];
		for (var i = 0; i < arr.length; i++) {
			if (typeof arr[i] !== 'object') array.push(arr[i]);
			if (typeof arr[i] === 'object') {
				if (i % 2 !== 0) recursia(arr[i].reverse());
				else recursia(arr[i]);
			}
		}
		return array;
	}
	return recursia(matrix);
}
