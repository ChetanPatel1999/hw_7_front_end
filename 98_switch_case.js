//wap to check given number is even or odd using switch case.
let num = Number(prompt("enter a num : "))
switch (num % 2 == 0) {
    case true: alert("num is even"); break;
    case false: alert("num is odd"); break;
}