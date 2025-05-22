//wap to make mini club project
let age = Number(prompt("enter your age : "))//45
if (age >= 18) {
    let num = Number(prompt("welcome to my club : \n 1. noodles : 60 \n 2. pizza : 100\n 3. sandwitch : 120\n choose option : "))
    if (num == 1) {
        alert("your noodles is orderd please pay 60 rs");
    }
    else if (num == 2) {
        alert("your pizza is orderd please pay 100 rs");
    }
    else if (num == 3) {
        alert("your sandwitch is orderd please pay 120 rs");
    }
    else {
        alert("choosed wrong option");
    }
}
else {
    alert("you are not adult try after " + (18 - age) + " year")
}
alert("please visit again ");