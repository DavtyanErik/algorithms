const mergeSort = (array) => {
	if (array.length == 1)
		return array;
	const middlePoint = Math.floor(array.length / 2);
	const firstHalf = array.slice(0, middlePoint);
	const secondHalf = array.slice(middlePoint, array.length);
	return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

const merge = (arr1, arr2) => {
	let merged = [];
	while (arr1.length && arr2.length) {
		if (arr1[0] < arr2[0])
			merged.push(arr1.shift());
		else
			merged.push(arr2.shift());
	}
	while (arr1.length)
		merged.push(arr1.shift());
	while (arr2.length)
		merged.push(arr2.shift());
	return merged;
}

const array = [1, 8, 19, 7, 0, 90, 2, 1];

console.log(mergeSort(array));