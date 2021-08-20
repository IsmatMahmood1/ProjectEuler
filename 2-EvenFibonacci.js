function EvenFibonacci() {
    let fibonacci = [2, 1];
    let evenFibTotal = 2;

    while (fibonacci[0] < 4000000) {
        let fib = fibonacci[0] + fibonacci[1];
        if (fib > 4000000) {
            break;
        }
        else {
            fibonacci.unshift(fib);
            if (fib % 2 == 0) {
                evenFibTotal += fib;
            }
        }
    }
    return evenFibTotal;
}

console.log(EvenFibonacci());