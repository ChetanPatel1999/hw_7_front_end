//wap to check given char is alphabet or not.
let ch;
ch = prompt("enter a char :");
if (ch >= 'a' && ch <= 'z' || ch>="A" && ch<="Z") {
    console.log("char is alphabet");
}
else {
    console.log("char is not alphabet");
}