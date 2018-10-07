//рекурсия
function factorial(N){
    return N<=1 ? 1 : N * factorial(--N);
}

console.log("5! = ", factorial(5));

function printRange(iNumber){
    if (iNumber){
        console.log(iNumber);
        printRange(--iNumber);
    }
}
console.log("Число: ", printRange(9));
