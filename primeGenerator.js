const makePrimes = () => {
	let allPrimes = [2];
	const add = (newPrime) => allPrimes.push(newPrime);
	const getAll = () => allPrimes;
	return { add, getAll };
}

const primes = makePrimes();

const isPrime = (num) => {
	const allPrimes = primes.getAll();
	for (let i = 0; allPrimes[i] < Math.sqrt(num); i++)
		if (num % allPrimes[i] == 0)
			return false;
	primes.add(num);
	return true;
}

for (let i = 3; i <= 10000000; i += 2) {
	if(isPrime(i)) {
		console.log(i);
	}
}
