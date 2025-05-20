//wap to check given char is alphabet or not.
let ch;
ch = prompt("enter a char :");//A
if (ch >= String.fromCharCode(97) && ch.charCodeAt() <= 122 || ch>='A' && ch<='Z') {
    console.log("char is alphabet");
}
else {
    console.log("char is not alphabet");
}