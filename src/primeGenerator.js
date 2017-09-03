// @flow

const makePrimes = (): {
	add: (newPrime: number) => void,
	getAll: () => Array<number>
} => {
	let allPrimes: Array<number> = [2];
	const add = (newPrime: number): void => {
		allPrimes.push(newPrime);
	};
	const getAll = (): Array<number> => allPrimes;
	return { add, getAll };
};

const primes = makePrimes();

const isPrime = (num: number): boolean => {
	const allPrimes: Array<number> = primes.getAll();
	for (let i = 0; allPrimes[i] < Math.sqrt(num); i++)
		if (num % allPrimes[i] == 0) return false;
	primes.add(num);
	return true;
};
