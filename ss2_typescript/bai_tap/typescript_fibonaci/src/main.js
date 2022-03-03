var fibonacciArr = [0, 1];
function addFibonacci(firstNum, secondNum) {
    //tim so fibonacci toi 1 gioi han nao do
    if (secondNum <= 100) {
        var nextNum = firstNum + secondNum;
        fibonacciArr[fibonacciArr.length] = nextNum;
        firstNum = secondNum;
        secondNum = nextNum;
        return addFibonacci(firstNum, secondNum);
    }
    return fibonacciArr;
}
addFibonacci(fibonacciArr[0], fibonacciArr[1]);
var sum = 0;
fibonacciArr.forEach(function (num) {
    console.log(num);
    sum += num;
});
console.log("Sum of fibonacci numbers is ".concat(sum));
