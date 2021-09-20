// Only change code below this line
function convertStrToInt(str){
    return parseInt(str, 16); //(str, 16) 16 for hexadecimal

}

convertStrToInt("BA");
console.log(convertStrToInt("BA"));
console.log(convertStrToInt("F1"));
console.log(convertStrToInt("JeffBezos"));
// Only change code above this line
module.exports = convertStrToInt;