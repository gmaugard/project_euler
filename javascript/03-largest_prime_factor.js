const largestPrimeFactor = n => factor => largest => {
	if (n > 1)
		return Number.isInteger(n / factor) ? largestPrimeFactor (n / factor) (factor) (factor) : largestPrimeFactor (n) (factor + 1) (largest)
	else
		return largest
}

console.log(largestPrimeFactor(600851475143) (2) (0))
