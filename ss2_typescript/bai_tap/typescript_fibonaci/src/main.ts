let fibonacciArr: number[] = [0,1];

function addFibonacci(firstNum: number, secondNum: number): number[] {

    //tim so fibonacci toi 1 gioi han nao do
    if (secondNum <= 100) {
        let nextNum = firstNum + secondNum;
        fibonacciArr[fibonacciArr.length] = nextNum;

        firstNum = secondNum;
        secondNum = nextNum;

        return addFibonacci(firstNum,secondNum);
    }

    return fibonacciArr;

}

addFibonacci(fibonacciArr[0],fibonacciArr[1]);

let sum: number = 0;

fibonacciArr.forEach((num) => {
    console.log(num);
    sum += num;
})

console.log(`Sum of fibonacci numbers is ${sum}`);
