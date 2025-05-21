//wap to print state name according to state short name.
let shortName = prompt("enter short name of state : ")
switch (shortName) {
    case "mp": console.log("madhya pradesh"); break;
    case "up": console.log("utter pradesh"); break;
    case "rj": console.log("rajsthan"); break;
    case "mh": console.log("maharashtra"); break;
    case "jk": console.log("jamu kashmir"); break;
    default: console.log("wrong short name");
}