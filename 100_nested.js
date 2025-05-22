//wap to check you are eligible to casting vote in india or not.
let country = prompt("enter yes if you are indian : ")
if (country == "yes") {
    let age = Number(prompt("enter your age : "))
    if (age >= 18) {
        console.log("you can vote in india");
    }
    else {
        console.log("you are not eligible for voting")
    }
}
else {
    console.log("you are not indian ");
}