function LargestPrime() {
    let number = 600851475143;
    let largestPrime = 0;
    let allFactors = getAllFactors(number);

    for (i = 0; i < allFactors.length;i++){
        if (checkPrime(allFactors[i]) && allFactors[i] > largestPrime) {
            largestPrime = allFactors[i];
        }
    }
    console.log(largestPrime);
}

LargestPrime();

function checkPrime(num) {
    if (getAllFactors(num).length == 2)
        return true;
}

function getAllFactors(number) {
    const sqRoot = Math.ceil(Math.sqrt(number));
    let i = 1;
    let allFactors = [];
    while (i <= sqRoot) {
        if (number % i == 0) {
            allFactors.push(i);
            allFactors.push(number / i)
        }
        i++;
    }
    return allFactors
}