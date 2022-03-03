console.log("start");
var money = 10000;
console.log(money);
var buyACar = function (car) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (money >= 10000) {
                resolve("can buy " + car);
            }
            else {
                reject("not enough money!");
            }
        }, 10000);
    });
};
money = 10001;
var promise = buyACar("BMW").then(function (value) {
    console.log(value);
    console.log("end");
}, function (error) {
    console.log(error);
});
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
