// @flow

const fibonacci = (num: number): number => {
	const fibonacciHelper = (term: number, value: number, previous: number) => {
		'use strict';
		if (term === 0) {
			return 0;
		} else if (term === 1) {
			return value;
		} else {
			return fibonacciHelper(term - 1, value + previous, value);
		}
	};
	return fibonacciHelper(num, 1, 0);
};
