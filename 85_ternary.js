//wap to find greatest num between two number.
// let num1 = Number(prompt("enter first num : "))
// let num2 = Number(prompt("enter second  num : "))
// num1 > num2 ? document.write("greatest num : ", num1) : document.write("greatest num : ", num2);

// let num1 = Number(prompt("enter first num : "))
// let num2 = Number(prompt("enter second  num : "))
// let ans = num1 > num2 ? num1 : num2;
// document.write("greatest num : ", ans)

//wap to find largest num between three number.
// let num1 = Number(prompt("enter first num : "))
// let num2 = Number(prompt("enter second  num : "))
// let num3 = Number(prompt("enter third  num : "))
// let ans;
// ans = num1 > num2 ? num1 : num2;
// ans = ans > num3 ? ans : num3;
// document.write("greatest num : ", ans) 

//wap to find largest num between three number using nested ternary.
// let num1 = Number(prompt("enter first num : "))
// let num2 = Number(prompt("enter second  num : "))
// let num3 = Number(prompt("enter third  num : "))
// let ans;
// ans = num1 > num2 ? (num1>num3?num1:num3) :(num2>num3?num2:num3);
// document.write("greatest num : ", ans) 


//wap to find largest num between three number.
let num1 = Number(prompt("enter first num : "))
let num2 = Number(prompt("enter second  num : "))
let num3 = Number(prompt("enter third  num : "))
let ans;
ans = (num1 > num2 && num1 > num3) ? num1 : num2 > num3 ? num2 : num3;
document.write("greatest num : ", ans) 