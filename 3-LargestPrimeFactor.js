function LargestPrime() {
    let number = 600851475143;
    let A = number - 1;

    for (let i = A; i > 1; i--) {
        let prime = CheckPrime(i);
        if (prime) {
            console.log(i);
            break;
        }
    }
}

LargestPrime();

function CheckPrime(num) {
    let B = num - 1;
    let isPrime = true;

    while (B != 1) {
        if (num % B == 0) {
            isPrime = false;
        }
        B--;
    }
    return isPrime;
}