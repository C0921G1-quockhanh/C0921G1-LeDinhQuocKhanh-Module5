console.log("start");

let money = 10000;
console.log(money);

const buyACar = (car: any) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can buy " + car);
            } else {
                reject("not enough money!");
            }
        },10000);
    })
}

money = 10001;

const promise = buyACar("BMW").then(value => {
    console.log(value);
    console.log("end");

}, error => {
    console.log(error);
})

console.log(promise);

//
// const promise2 = buyACar("Audi").then(value => {
//     console.log(value);
// }, error => {
//     console.log(error);
// })
//
// console.log(promise2);
// console.log(money);

