//wap to check given char is alphabet or digit or special symbol.
let ch;
ch = prompt("enter a char :");
if (ch >= String.fromCharCode(97) && ch <= String.fromCharCode(122) || ch >= String.fromCharCode(65) && ch <= String.fromCharCode(90)) {
    console.log("char is alphabet");
}
else if (ch >= String.fromCharCode(48) && ch <= String.fromCharCode(57)) {
    console.log("char is digit");
}
else {
    console.log("char is special symbol");
}