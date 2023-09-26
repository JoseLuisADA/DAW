function fibonacciHastaN(n) {
    let a = 0, b = 1, siguiente;

    while (a <= n) {
        console.log(a);
        siguiente = a + b;
        a = b;
        b = siguiente;
    }
}

const numero = 100; 
fibonacciHastaN(numero);