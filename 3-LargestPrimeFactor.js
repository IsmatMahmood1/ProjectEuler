function LargestPrime() {
    // let number = 600851475143;
    const number = 3453;

    let sqRoot = Math.ceil(Math.sqrt(number) + 1);

    // console.log(sqRoot);
    let i = 1;

    let largestPrime = 1;

    while ( i <= sqRoot ) {
        if (number % i == 0 ) {
            if ( CheckPrime(i) && i > largestPrime) {
                largestPrime = i
            }
            let oppositeFactor = number / i;
            if ( CheckPrime( oppositeFactor ) && oppositeFactor > largestPrime) {
                largestPrime = oppositeFactor
            }
        }
        i++;
    }

    console.log(largestPrime);
}

LargestPrime();

function CheckPrime(num) {
    let B = num - 1;

    while (B != 1) {
        if (num % B == 0) {
            return false;
        }
        B--;
    }
    return true;
}