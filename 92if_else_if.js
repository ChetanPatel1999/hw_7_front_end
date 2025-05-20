//wap to check given char is alphabet or digit or special symbol.
let ch;
ch = prompt("enter a char :");
if (ch >= 'a' && ch <= 'z' || ch >= "A" && ch <= "Z") {
    console.log("char is alphabet");
}
else if (ch >= '0' && ch <= '9') {
    console.log("char is digit");
}
else {
    console.log("char is special symbol");
}