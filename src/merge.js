// @flow

const mergeSort = (array, start = 0, end = array.length) => {
	if (end - start <= 1) return [array[start]];
	const middle = start + Math.floor((end - start) / 2);
	return merge(mergeSort(array, start, middle), mergeSort(array, middle, end));
};

const merge = (arr1, arr2) => {
	const merged = new Array(arr1.length + arr2.length);
	let k = 0,
		i1 = 0,
		i2 = 0;
	while (i1 != arr1.length && i2 != arr2.length) {
		if (arr1[i1] < arr2[i2]) merged[k++] = arr1[i1++];
		else merged[k++] = arr2[i2++];
	}
	while (i1 != arr1.length) merged[k++] = arr1[i1++];
	while (i2 != arr2.length) merged[k++] = arr2[i2++];
	return merged;
};
