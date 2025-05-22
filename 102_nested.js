//wap to find greatest num between three number without using logical and operator.
let num1 = 12, num2 = 15, num3 = 77;
if (num1 > num2) {
    if (num1 > num3) {
        console.log("greatest num : " + num1);
    }
    else {
        console.log("greatest num : " + num3);
    }
}
else {
    if (num2 > num3) {
        console.log("greatest num : " + num2);
    }
    else {
        console.log("greatest num : " + num3);
    }
}