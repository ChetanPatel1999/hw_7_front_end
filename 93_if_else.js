//wap to check given char is alphabet or digit or special symbol.
let ch;
ch = prompt("enter a char :");
if (ch.charCodeAt() >= 97 && ch.charCodeAt() <= 122 || ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) {
    console.log("char is alphabet");
}
else if (ch.charCodeAt()>= 48 && ch.charCodeAt() <= 57) {
    console.log("char is digit");
}
else {
    console.log("char is special symbol");
}