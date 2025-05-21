//wap to make simple calculator.
let num = Number(prompt("welcome to my calculator ...\n 1. addition \n 2. subtraction \n 3. multiplication \n 4. division\n choose option : "))
let num1, num2, ans;
switch (num) {
    case 1:
        num1 = Number(prompt("enter frist num : "));
        num2 = Number(prompt("enter second num : "));
        ans = num1 + num2;
        alert(num1 + " + " + num2 + " = " + ans)
        break;
    case 2:
        num1 = Number(prompt("enter frist num : "));
        num2 = Number(prompt("enter second num : "));
        ans = num1 - num2;
        alert(num1 + " - " + num2 + " = " + ans)
        break;
    case 3:
        num1 = Number(prompt("enter frist num : "));
        num2 = Number(prompt("enter second num : "));
        ans = num1 * num2;
        alert(num1 + " * " + num2 + " = " + ans)
        break;
    case 4:
        num1 = Number(prompt("enter frist num : "));
        num2 = Number(prompt("enter second num : "));
        ans = num1 / num2;
        alert(num1 + " / " + num2 + " = " + ans)
        break;
    default: alert("wrong choise please press 1 to 4");    
}