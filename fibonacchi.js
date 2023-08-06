let fib = [0, 1];
for ( let i = 2; i <= 15; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];         //fibonacchi ber korar formula
}
console.log(fib);