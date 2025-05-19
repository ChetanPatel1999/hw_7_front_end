//wap to print good morning if user press 1
//wap to print good afternoon if user press 2
//wap to print good evening if user press 3
//wap to print good night if user press 3
let num;
num = Number(prompt("enter a num : "))//-5
if (num == 1) {
    console.log("good morning");
}
if (num == 2) {
    console.log("good after noon");
}
if (num == 3) {
    console.log("good evening");
}
if (num == 4) {
    console.log("good night");
}
if (num > 4 || num <= 0) {
    console.log("please enter 1 to 4");
}